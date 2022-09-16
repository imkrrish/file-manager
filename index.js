let inputTypeFile = document.getElementById("upload-button");
let tableRaw = document.getElementById("tbody");

inputTypeFile.addEventListener("change", function () {

  if (this.files.length > 0) {
    for (var i = 1; i <= this.files.length; i++) {
      let filename = this.files.item(i).name;
      let Name = filename.substring(0, filename.lastIndexOf(".")) || filename;
      let size = "";

      function formatFileSize(bytes) {
        if (bytes == 0) {
          size = "0 Bytes";
        } else {
          var k = 1000,
            dm = 2,
            sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
            i = Math.floor(Math.log(bytes) / Math.log(k));
          size =
            parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
        }
      }

      formatFileSize(this.files.item(i).size);
      let tooltiptext = "<p>name: " + Name + "<br>type: " + this.files.item(i).type + "<br>size: " + size + "</p>";

      tableRaw.innerHTML +=
        "<tr>" +
          "<td data-lable='S.No'>" + i + "</td>" +
          "<td data-lable='File Name'>" + Name + "</td>" +
          "<td data-lable='size'>" + size + "</td>" +
          "<td data-lable='file info'>" +
            "<i class='fa-solid fa-circle-info tooltip'><span class='tooltiptext'>" + tooltiptext + "</span></i>" +
          "</td>" +
        "</tr>";
    }
  }
});