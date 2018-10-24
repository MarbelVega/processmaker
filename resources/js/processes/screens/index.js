import Vue from 'vue'
import ScreenListing from './components/ScreenListing'
import ModalCreateScreen from "./components/modal/modal-screen-add";

new Vue({
    el: '#screenIndex',
    data: {
        filter: '',
        screenModal: false,
        screenId: null
    },
    components: {
        ScreenListing,
        ModalCreateScreen
    },
    methods: {
        show() {
            this.ScreenId = null;
            this.ScreenModal = true;
        },
        reload() {
            this.$refs.screenListing.dataManager([
                {
                    field: 'updated_at',
                    direction: 'desc'
                }
            ]);
        }
    }
});
