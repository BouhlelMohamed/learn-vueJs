<template>
  <div id="our-blog">
      <h1>{{ pageName }}</h1>
      <h6>{{ pageDescription }}</h6>
      <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <div class="posts-area">
                      <BlogPosts v-for="post in posts" 
                      :key="post.id" 
                      :title="post.title"
                      :views="post.views"
                      :date="post.date"
                      :content="post.content"
                      :category="post.category"
                      :author="post.author"
                       />
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>



<script>

import BlogPosts from "@/components/Blog/BlogPosts.vue";
import JsonPosts from "../json/blog_posts.json";

export default {
    data: function () {
        return {
            pageName: "Blog",
            pageDescription: "This is my Blog",
            posts: JsonPosts
        };
    },
    name: "blog",
    components: {
        BlogPosts
    }
};
</script>