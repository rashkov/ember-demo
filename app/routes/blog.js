import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    //this.store.get('blog-posts')
    return ['a', 'b']
  }
});
