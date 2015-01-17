wondervoy

    .factory("StorySev", function ($http, $q, $upload,SERVER) {

        var StorySev = {};

        //上传图片
        StorySev.upload = function(file){
            return  $upload.upload({
                url: SERVER.url+'/file/upload', // upload.php script, node.js route, or servlet url
                method: 'POST',
//                headers: {'Authorization': 'xxx'}, // only for html5
                headers: {'is-form-data': '1'},
                //withCredentials: true,
                file: file  // single file or a list of files. list is only for html5
                //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
                //fileFormDataName: myFile, // file formData name ('Content-Disposition'), server side request form name
                // could be a list of names for multiple files (html5). Default is 'file'
                //formDataAppender: function(formData, key, val){}  // customize how data is added to the formData.
                // See #40#issuecomment-28612000 for sample code
            });
        }
        StorySev.addStory = function (coverPic, coverDesc, story) {
            var defer = $q.defer();
            $http.post(SERVER.url + "/story/publish", {
                coverPic: coverPic,
                coverDesc: coverDesc,
                story: story
            })
            .success(function (res) {
                defer.resolve(res);
            })
                .error(function(err){
                    defer.reject(err);
                });

            return defer.promise;
        }

        return  StorySev;

    });
