App = Ember.Application.create();


App.Router.map(function() {
  this.route("payment");
  this.route("card");
})

App.Transaction = Ember.Object.extend({
    value : "", // Valor a receber
    value_charge: "", // Valor a cobrar
    type: "", // Tipo da transação
    quotes: 1,  // Parcelas
    card_number: "",
    card_owner: "",
    card_date: "",
    card_security_code: ""
});

transaction = App.Transaction.create();

// INDEX

App.IndexRoute = Ember.Route.extend({
  model: function(){  	  
      return transaction;
  },
  setupController : function(controller, model){
	    controller.set("model", model);
  }
});

App.IndexController = Ember.Controller.extend({
	quotes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
	actions: {
	    submitAction : function(){
	        this.transitionToRoute('payment');
    	}	
	}
});

// PAYMENT

App.PaymentRoute = Ember.Route.extend({
  model: function(){
      return transaction;
  },
  setupController : function(controller, model){
	    controller.set("model", model);
  }
});

App.PaymentController = Ember.Controller.extend({
	payments: [
	    { name: "Cartão de crédito", id: 1 },
	    { name: "Débito", id: 2 },
	    { name: "Dinheiro", id: 3 }
  	],
  	currentPayment: {
   	 id: 1
  	},

	actions: {
	    submitAction : function(){
	    	var transaction = this.get("model")
	        payment_type  = transaction.type ;

	        if ( payment_type == 1 ){
	        	this.transitionToRoute('card');
	        }else if ( payment_type == 2 ) {
	        	// enviar para débito
	        }else {
	        	// enviar para dinheiro
	        }
	        model = this.get("model"); 	        
    	}	
	}
});

// CARD

App.CardRoute = Ember.Route.extend({
  model: function(){  	  
      return transaction;
  },
  setupController : function(controller, model){
	    controller.set("model", model);
  }
});

App.CardController = Ember.Controller.extend({
	quotes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 

	actions: {
	    submitAction : function(){
	    	var transaction = this.get("model")
	        
	        model = this.get("model"); 	        
    	}	
	}
});