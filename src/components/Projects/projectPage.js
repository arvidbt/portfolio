export default {
  name: 'MyProjects',
  inheritAttrs: false,
  data() {
      return {
          portfolio: false,
          PBLogger: false,
          thirty: false,
          mira: false,
          antiTD: false,
          twenty48: false,

      }
  },
  methods: {
      redirect(linkToSite) {
          window.open(linkToSite, 'mywindow')
      },

      expand(type) {
        // vrf funkar inte type = !type???? skulle bli så mkt enklare?? TODO: fixa denna hemska kod
        if(type === 'portfolio') {
          this.portfolio = !this.portfolio;
          return this.portfolio;
        } else if(type === 'PBLogger') {
          this.PBLogger = !this.PBLogger;
          return this.PBLogger;
        } else if(type === 'thirty') {
          this.thirty = !this.thirty;
          return this.thirty;
        } else if(type === 'mira') {
          this.mira = !this.mira;
          return this.mira;
        } else if(type === 'antiTD') {
          this.antiTD = !this.antiTD;
          return this.antiTD;
        } else if(type === 'twenty48') {
          this.twenty48 = !this.twenty48;
          return this.twenty48;
        }
      },


      PBLoggerExpanded() {
        return "Detta är en sträng om PBLOGGER!"
      },

      thirtyExpanded() {
        return "Detta är en sträng om THIRTY!"
      },

      miraExpanded() {
        return "Detta är en sträng om MIRA!"
      },

      antiTDExpanded() {
        return "Detta är en sträng om ANTITD!"
      },

      twenty48Expanded() {
        return "Detta är en sträng om 2048!"
      }
  }
}
