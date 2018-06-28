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

