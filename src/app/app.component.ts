import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  /**
   * Declare global variables
   */
  title = 'microblog-app';
  inputText = '';
  postList = [];
  user = {
    name: 'Sample Name',
    username: '@username',
    image: 'https://avatars0.githubusercontent.com/u/28289048?s=460&v=4'
  };

  /**
   * Get post lists
   */
  getPosts() {
    // $http({
    //   method: 'GET',
    //   url: 'http://microblog-api/api/posts'
    // })
    // .then(function successCallback(response) {
    //   console.log(response);
    // }, function errorCallback(error) {
    //   console.log(error);
    // });
  }

  /**
   * Add post
   * 
   * @param string post
   */
  addPost(post) {
    this.loading();

    if (post) {
      // save to db using addPost API
      this.savePost(post);

      this.postList.unshift({
        user: this.user,
        post: {
          content: post
        }
      });
    }

    this.loading(false);
  }

  /**
   * Save post into database
   * 
   * @param string post
   */
  savePost(post) {
    let body = JSON.stringify(post);
    // return this.http.post('/api/food/', body, httpOptions);
  }

  /**
   * Loading gif
   */
  loading(status = true) {
    if (status) {
      document.querySelector('.loading').classList.add('loading--active');
    } else {
      document.querySelector('.loading').classList.remove('loading--active');
    }
  }
}
