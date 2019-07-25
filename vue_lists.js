var app = new Vue({
    el: '#app', //Attach to element id app
    data: {
        countries_list: [], //Blank country array
    },

    mounted() { //When element is mounted, look up data
        axios
            .get('https://restcountries.eu/rest/v2/region/americas?fields=name;capital;flag;population')
            .then(response => (
                this.countries_list = response.data
                ))
            .catch(error =>(
                console.log(error)
                ));
    }

})