
export default {
  name: 'skillPage',
  data() {
    return {
      backend: true,
      frontend: true,
      design: true,
      system: true,
      both: true,
      showAll: false,
    }
  },
  methods: {
    backendSelected() {
      this.backend = !this.backend;
      if(this.backend) {
        this.frontend = false;
        this.design = false;
        this.system = false;
        this.showAll = false;
      } else {
        this.showAll = true;
      }
    },
    frontendSelected() {
      this.frontend = !this.frontend;
      if(this.frontend) {
        this.backend = false;
        this.design = false;
        this.system = false;
        this.showAll = false;
      } else {
        this.showAll = true;
      }
    },
    designSelected() {
      this.design = !this.design;
      if(this.design) {
        this.frontend = false;
        this.backend = false;
        this.system = false;
        this.showAll = false;
      } else {
        this.showAll = true;
      }
    },
    systemSelected() {
      this.system = !this.system;
      if(this.system) {
        this.frontend = false;
        this.design = false;
        this.backend = false;
        this.showAll = false;
      } else {
        this.showAll = true;
      }
    },
    isHighlighted(type) {
      if(this.showAll) return true;
      return type;
    },
  }
}
