Array.prototype.clone=function(){return this.slice(0)},Array.prototype.remove=function(t){return 0===t?(this.shift(),this):(this.splice(t,1),this)},Array.prototype.isNull=function(){return!this.some(t=>null!==t)},String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};