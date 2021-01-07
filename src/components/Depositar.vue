<template>
  <div class="container">
      <div class="row p-4">
        <div class="col-md-6">
          <form  @submit="addProducto" class="card p-2">
            <div class="form-group">
              <input type="number"
                     class="form-control" 
                     placeholder="ID"
                     v-model="id"
                     name="id"/>
            </div>
            
            <div class="form-group">
             <input type="number"
                    class="form-control"
                    placeholder="Monto"
                    v-model="monto"/>
            </div>
            
           <Button class="btn btn-primary">Realizar deposito</Button>
          </form> 
        </div>
        <div class="col-md-6">
         
           <li v-for="item in lista" 
               v-bind:key="item.id" class="list-group-item p-2 m-2">
               {{item.id}}
               {{item.monto}}
            </li>
         </div>

      </div>
    </div>
</template>


<script>
export default {
 data() {
    return {
      lista: [],
      id:'',
      monto:'' }
    },
    methods:{
        addProducto:function(e) {
           let id = this.id;
           let monto = this.monto;  
           const obj = {id,monto};
           console.log(obj)
           this.$http.post("http://localhost/apivue/" ,obj)
            .then(respuesta => {  console.log(respuesta.data)
             this.getProducto() })
            .catch(error => { console.log(error)
      })
         e.preventDefault();
        
  }, //fin de la funcion addProducto
        getProducto:function(){
            this.$http.get("http://localhost/apivue/")
              .then(respuesta => {
                 this.lista = respuesta.data
                 console.log(respuesta.data) })
              .catch(error => {console.log(error) })
    }//fin de la funcion getProducto

    },
     created() {
        this.getProducto();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   text-align: center;
}
</style>
