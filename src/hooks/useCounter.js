import {ref, reactive} from "vue"


function useCounterRef(initial){
    const counterRef = ref(initial);
    function countCounterRef(){
        counterRef.value++;
    }

    return {counterRef, countCounterRef}
}

function useCounterRt(initial){
    const counterRt = reactive({counter:initial});
    function countCounterRt(){
        counterRt.counter++;
    }

    return {counterRt, countCounterRt}
}

export default {useCounterRef,useCounterRt};