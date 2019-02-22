import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),

  actions: {
    pushWithIncludes() {
this.store.pushPayload({
  data: {
    type: "posts",
    id: 1,
    attributes: {
      title: "This is a test post"
    },
    relationships: {
      comments: {
        data: [
          {
            id: 1,
            type: "comments"
          }
        ],
        links: {
          self: "/api/v1/posts/1/relationships/comments",
          related: "/api/v1/posts/1/comments"
        }
      }
    }
  },
  included: [
    {
      type: "comments",
      id: 1,
      attributes: {
        title: "first comment!"
      }
    }
  ]
});
this.target.send('refresh');
    },

    pushWithoutIncludes() {
this.store.pushPayload({
  data: {
    type: "posts",
    id: 1,
    attributes: {
      title: "This is a test post"
    },
    relationships: {
      comments: {
        links: {
          self: "/api/v1/posts/1/relationships/comments",
          related: "/api/v1/posts/1/comments"
        }
      }
    }
  }
});
    }
  }
});
