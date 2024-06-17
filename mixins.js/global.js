export default {
    data() {
        return {
            baseLaraURL: 'https://fapi.jtaholding.qa',
        }
    },
    methods: {
        imager(image) {
            return this.baseLaraURL + "/storage/" + image;
        },
    },
    watch: {
        $route(to, from) {
            if (to.fullPath == '/') {
                var elements = document.getElementsByClassName('navbar-change');

                Array.prototype.forEach.call(elements, function (el) {
                    el.classList.add('jta-navbar-item')
                });
            }
            else {
                var elements = document.getElementsByClassName('navbar-change');

                Array.prototype.forEach.call(elements, function (el) {
                    el.classList.remove('jta-navbar-item')
                    var firstChild = el.firstChild
                    if (firstChild.tagName)
                        firstChild.classList.add('has-text-dark')
                });
            }
        },
    },

}