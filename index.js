var app = new Vue({ 
  el: '#app1',
  data: {
      message: 'Hello Vue!'
  }
});

var app2 = new Vue({ 
  el: '#app2',
  data: {
      seen: true
  }
});
// app2.seen = false;

var app3 = new Vue({
  el: '#app3',
  data: {
    todos: [
      { text: 'Learn JS' },
      { text: 'Learn Vue' },
      { text: 'Build Something' }
    ]
  }
})
app3.todos.push({ text: 'New Item' })

var app4 = new Vue({
  el: '#app4',
  data: {
    message4: 'Hello again Vue!'
  },
  methods: {
    reverseMessage: function () {
      this.message4 = this.message4.split('').reverse().join('')
    }
  }
})

var app5 = new Vue({ 
  el: '#app5',
  data: {
      message5: 'Hello Vue!'
  }
});

// registering a vue component.  name followed by options object with a template
Vue.component('tudo-item', {
    props: ['tudo'],
    template: '<li>{{ tudo.text }}</li>'
})

var app6 = new Vue({ 
  el: '#app6',
  data: {
    groceryList: [
      { id: 0, text: 'Veggies' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Meat'}
    ]
  }
});
//ideally we want to pass data from var app6 into the Vue.component to keep adding new templates to the list.
