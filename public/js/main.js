var page;
var titles = {};
function next(){
  $('#images').empty();
  this.page = this.page + 1;
  mainViewLoad(this.page);
}
function prev(){
  if(this.page>1){
  $('#images').empty();
  this.page = this.page - 1;
  mainViewLoad(this.page);
  }
}
function submit(){


}
function search(){
  var txt = document.getElementbyId("txt").value;


}
  function mainViewLoad(page) {
      this.page = page;
      var imgs = "";
      titles = {};
      var count = 1;
      $('#images').append(null);
      $.ajax({
          url: 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=24662369@N07&format=json&nojsoncallback=1&page=' + this.page,
          type: "GET",
      }).done(function(response) {
          $.each(response.photos.photo, function(farm, id, isfamily, isfriend, ispublic, owner, secret, server, title) {
              // var sampleImgObj = { "id": id, "owner": owner, "secret": secret, "server": server, "farm": farm, "title": title, "ispublic": ispublic, "isfriend": isfriend, "isfamily": isfamily };
              var urlDefault = 'https://farm' + id.farm + '.staticflickr.com/' + id.server + '/' + id.id + '_' + id.secret + '.jpg';
              var urlLarge = 'https://farm' + id.farm + '.staticflickr.com/' + id.server + '/' + id.id + '_' + id.secret + '_b.jpg';
              imgs += `<tr id="${id.id}"><td><img src="` + urlDefault + `" ></td><td><h2>${id.title}</h2><h3>Tell us what do you think about this image!!</h3>` +
              `<textarea rows=8 cols=40 style="background:transparent;color:pink;font-size:1em" id="comment" />` +
              `<br /><br /><input class="button" type="button" onclick="submit()" value="Submit Reviews"/></td>` ;
              titles[count] = { id:"${id.id}", t:"${id.id}" };
              count++;
          });
          $('#images').append(imgs);
      });
  }
