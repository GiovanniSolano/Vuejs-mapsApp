import { computed, defineComponent, ref } from "vue";
import SearchResults from '@/components/search-results/SearchResults.vue'
import { usePlacesStore } from '../../composables/usePlacesStore';

export default defineComponent({
    name: 'SearchBar',
    components: {SearchResults},
    setup() {

        const debouunceTimeout = ref();
        const debouncedValue = ref('');

        const { searchPlacesByTerm } = usePlacesStore();


        return {
            debouncedValue,

            searchTerm: computed({
                get() {
                    return debouncedValue.value;
                },
                set(val: string) {

                    if(debouunceTimeout.value) clearTimeout(debouunceTimeout.value)

                    debouunceTimeout.value = setTimeout(() => {
                        debouncedValue.value = val;
                        searchPlacesByTerm(debouncedValue.value);
                    }, 500);

                }
            })

        }

    }
});