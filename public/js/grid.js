var page;
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
  function mainViewLoad(page) {
      this.page = page;
      var imgs = "";
      $('#images').append(null);
      $.ajax({
          url: 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=24662369@N07&format=json&nojsoncallback=1&page=' + this.page,
          type: "GET",
      }).done(function(response) {
          $.each(response.photos.photo, function(farm, id, isfamily, isfriend, ispublic, owner, secret, server, title) {
              // var sampleImgObj = { "id": id, "owner": owner, "secret": secret, "server": server, "farm": farm, "title": title, "ispublic": ispublic, "isfriend": isfriend, "isfamily": isfamily };
              var urlDefault = 'https://farm' + id.farm + '.staticflickr.com/' + id.server + '/' + id.id + '_' + id.secret + '.jpg';
              var urlLarge = 'https://farm' + id.farm + '.staticflickr.com/' + id.server + '/' + id.id + '_' + id.secret + '_b.jpg';
              imgs += `<td><img src="` + urlLarge + `" ></td>` ;
          });
          $('#images').append(imgs);
      });
  }
