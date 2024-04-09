package com.test.back.controllers;

import com.test.back.auxiliar.Login;
import com.test.back.auxiliar.ProductModel;
import com.test.back.models.*;
import com.test.back.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Controller {

    @Autowired
    private PersonaRepository repository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private CartElementRepository cartElementRepository;
    @Autowired
    private ProductRepository productRepository;

    @GetMapping()
    public String index(){
        return "CONECTADO";
    }
    @GetMapping("personas")
    public List<Persona> getPersonas(){
        return repository.findAll();
    }

    @PostMapping("grabar")
    public String save(@RequestBody Persona persona){
        repository.save(persona);
        return "Grabado";
    }

    @PutMapping("editar/{id}")
    public String edit(@PathVariable Long id, @RequestBody Persona persona){
        Persona updatePersona = repository.findById(id).get();
        updatePersona.setNombre(persona.getNombre());
        repository.save(updatePersona);
        return "Editado";
    }

    @DeleteMapping ("delete/{id}")
    public String delete(@PathVariable Long id){
        Persona deletePersona = repository.findById(id).get();
        repository.delete(deletePersona);
        return "Eliminado";
    }

    //TPTPTPTPT
    //-------------------------------------------------------------------------------------------------------
    @PostMapping("user/create")
    public void altaUsuario(@RequestBody User user){
        userRepository.save(user);
        if (user.getTipo().equals("cliente")){
            Cart cart = new Cart();
            cartRepository.save(cart);
        }
    }

    @GetMapping("user/getall")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }



    @GetMapping("login")
    public String login(@RequestBody Login login){
        List <User> users = userRepository.findAll();
        for(User user : users){
            if (user.getMail().equals(login.getMail()) && user.getPassword().equals(login.getPass())){
                return "ok";
            }
        }

        return "not ok";
    }

    //CARRITO

    @GetMapping("carrito/check")            //pide id producto para agregar
    public String consultaStock(@RequestBody ProductModel productModel){
        if(productRepository.findById(productModel.getId()).get().getStockDisponible() <= productModel.getCant()){
            return "ok";
        }
        else {return "not ok";
        }
    }


    @PostMapping("product/create")
    public void createProduct(@RequestBody Product product){
        if (product.getVendedor().getTipo().equals("vendedor")){
            productRepository.save(product);
        }

    }

    @GetMapping("product/getall")
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    //cambiar stock, eliminar producto

    @PutMapping("product/editstock")
    public void editStockProduct(@RequestBody Product product){
        Product updateProduct = productRepository.findById(product.getId()).get();
        updateProduct.setStockDisponible(product.getStockDisponible());
        productRepository.save(updateProduct);
    }

    @DeleteMapping("product/delete")
    public void deleteProd(@RequestBody Long id){
        productRepository.deleteById(id);
    }


}
