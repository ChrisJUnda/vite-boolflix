<script>
export default {
    name: "CardsComponents",
    props: ["img", "title", "original_title", "language", "vote", "overview"],
    data() {
        return {
            langs: {
                en: ["en", "england"],
                
                it: ["it", "italy"],
                
                es: ["es", "spain"],
                
                fr: ["fr", "france"],
                
                de: ["de", "germany"],

                ja: ["ja", "japan"],

            },
            displayInfo: false
        }
    },

    methods: {
        findLang(language) {
            for (let key in this.langs) {
                if (this.langs[key][0] === language) {
                    return this.langs[key];
                }
            }
        },

        voteInStars(vote) {
            return Math.round(vote / 2);
        },

        display() {
            this.displayInfo = !this.displayInfo
        }
    }
}

</script>

<template>
    

        <li @click="display()">
        <img class="poster" v-show="!displayInfo" :src="img" :alt="title">
        <div class="info" v-show="displayInfo">
            <p>Titolo: {{ title }}</p>
            <p>Titolo originale: {{ original_title }}</p>
            <div>
                <img class="flag" v-if="findLang(language)" :src="`/flag/${findLang(language)[1]}.png`" :alt="language">
                <p v-else>{{ language }}</p>
            </div>
            
            <div>Voto:
                <span v-for="star in voteInStars(vote)">
                    <i class="fa fa-star" aria-hidden="true"></i>
                </span>
                <span v-for="star in (5 - voteInStars(vote))">
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                </span>

            </div>
            <p>Overview: {{ overview }}</p>
        </div>
    </li>
    
</template>

<style scoped>
li {
    width: calc(25% - 40px);
    min-height: 420px;
    margin: 20px 15px 20px 0;
    padding-left: 5px;
    margin: auto;
}

p {
    margin: 10px 0;
}

.flag {
    width: 50px;
    height: 50px;
}

.fa-star,
.fa-star-o {
    color: rgb(235, 200, 0);
    margin: 2px;
}

.poster {
    width: 100%;
}

.info {
    width: 100%;
    height: 100%;
    border: 1px solid black;
    color: black;
    padding: 10px;
}
</style>