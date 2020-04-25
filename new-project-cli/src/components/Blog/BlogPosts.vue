<template>
    <div class="post bg-light mb-3">
        <div class="d-flex">
            <h3 class="w-50">
                {{ title | reverse }}
            </h3> 
            <div class="float-right w-50">
                <div class="bg-success w-25 float-right">
                    {{ views }}
                </div>
            </div>
        </div>
        <div>{{ date }}</div>
        <div>
            {{ content }}
        </div>
        <div class="d-flex">
            <div class="w-50 border border-primary">
               {{ author }}
            </div> 
            <div class="w-50 border border-primary">
                <div>
                    {{ category | uppercase}}
                </div>
            </div>
        </div>
    </div>
</template>
    

<script>
export default {
    props: ["title","views","date","content","author","category"],
    name: "post"
};
</script>

<style>
.post {
    height: auto;
    border : 1px solid black;
}

</style>