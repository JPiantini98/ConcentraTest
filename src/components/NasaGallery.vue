<template>
  <header>
    <h1 class="title">
      Welcome to Nasa Gallery
    </h1>

    <h3 class="title">
      A place for those who want to see the space
    </h3>
  </header>

  <body>
    <div>
      <div v-for="image in tableData" :key="image.id" class="galleryStyle">

        <el-row>
          <el-col span="6">

          </el-col>
        </el-row>
        <el-button
          class="buttonFormat"
          type="danger"
          @click="DeletePhoto(image.id)"
        >
          Delete
        </el-button>

        <el-image
          class="pictureFormat"
          :src="image.img_src"
        />

        <span class="description"> Camera: {{ image.camera.full_name }} </span>
        <span class="description"> Earth Date: {{ image.earth_date }} </span>
        <span class="description"> Rover: {{ image.rover.name }} </span>
        

      </div>

      <el-button
        id="morImageBtn"
        type="warning"
        @click="ShowMorePictures"
      >
        More Images
      </el-button>
    </div>


  </body>
</template>

<script>
import axios from "axios";
import { ElButton, ElTable } from 'element-plus'

export default {
  axios,
  components: {
    ElButton,
    ElTable
  },
  data() {
    return{
      apiURL: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=LbOF9UsbpxvsoNcYgnuviSAZvWVBFnkfYjxXYpRz",
      tableData: [],
      NasaDatabase: [],
      firstImage: 0,
      lastImage: 12
    }
  },
  created() {
    //As soon as the component is created this method is going to be executed.
    this.getData();
  },
  methods: {

    getData(){
      axios.get(this.apiURL)
      .then(resp => {
        this.NasaDatabase = resp.data.photos;
        this.tableData = this.NasaDatabase.slice(this.firstImage, this.lastImage);
      });
    },

    DeletePhoto(selectedImageId) {
      //Get the index of the selected picture and remove it from the table's array.
      const imageIndex = this.tableData.findIndex(tableRow => {
        return tableRow.id === selectedImageId;
      });
      this.tableData.splice(imageIndex, 1);
    },

    //Take the next 12 photos from the original array and add it to the table's array.
    ShowMorePictures(){
      this.firstImage = this.lastImage;
      this.lastImage += 12;

      const newPictures = this.NasaDatabase.slice(this.firstImage, this.lastImage);
      newPictures.forEach(image => {
        this.tableData.push(image);
      });
    }
  }
}
</script>

<style>
body {
  background-color: #003b59;
}

.title {
  text-align: center;
  color: white;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.galleryStyle {
  padding: 30px 0;
  text-align: center;
  display: inline-block;
  width: 20%;
  box-sizing: border-box;
  vertical-align: top;
}

.pictureFormat {
  width: 250px;
  height: 200px;
  margin: 10px;
}

.buttonFormat {
  z-index: 1;
  position: absolute;
}

.description {
  color: white;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 15px;
  display: block;
  float: left;
  margin-left: 15px;
}

#morImageBtn {
  width: 100px;
  height: 100px;
  margin: 70px
}
</style>