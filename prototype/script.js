/* const mainMenuContainer = document.querySelector(".main-menu-container");
const mainContainer = document.querySelector(".main-container");

mainMenuContainer.style.display = "block";
mainContainer.style.display = "none";
 */
function startGame() {
  [mainMenuContainer.style.display, mainContainer.style.display] = [mainContainer.style.display, mainMenuContainer.style.display];

  const aScene = `
  <a-scene mindar-image="imageTargetSrc: ../assets/target/targets.mind; maxTrack: 10" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
  <a-assets>
    <a-asset-item id="aerithModel" src="../assets/3D Model/aerith_default/scene.gltf"></a-asset-item>
    <a-asset-item id="anime-girlModel" src="../assets/3D Model/anime_girl_tech-priest__umm_warhammer_40000/scene.gltf"></a-asset-item>
    <a-asset-item id="blue-archiveModel" src="../assets/3D Model/blue_archivekasumizawa_miyu/scene.gltf"></a-asset-item>
    <a-asset-item id="cyber-girlModel" src="../assets/3D Model/cyber_girl/scene.gltf"></a-asset-item>
    <a-asset-item id="dancing-girlModel" src="../assets/3D Model/dancing_girl_from_fire_emblem_if/scene.gltf"></a-asset-item>
    <a-asset-item id="elf-girlModel" src="../assets/3D Model/elf_girl/scene.gltf"></a-asset-item>
    <a-asset-item id="lightningModel" src="../assets/3D Model/lightning_-_white_mage/scene.gltf"></a-asset-item>
    <a-asset-item id="miyuModel" src="../assets/3D Model/miyu/scene.gltf"></a-asset-item>
    <a-asset-item id="scifi-girlModel" src="../assets/3D Model/scifi_girl_v.01/scene.gltf"></a-asset-item>
    <a-asset-item id="tifaModel" src="../assets/3D Model/tifa_-_itadaki_street_special/scene.gltf"></a-asset-item>

    <img id="bg-1" src="assets/images/background-1.jpg">
    <img id="bg-2" src="assets/images/background-2.jpg">
  </a-assets>

  <a-camera position="0 0 0" ></a-camera>

  <a-entity mindar-image-target="targetIndex: 0">
    <a-image position="0 .5 0" rotation="0 0 0" width="1" height="1" src="#bg-2"></a-image>
    <a-gltf-model rotation="0 0 0" position="0 0 0" scale="20 20 20" src="#aerithModel"></a-gltf-model>
  </a-entity>
  <a-entity mindar-image-target="targetIndex: 1">
    <a-gltf-model rotation="0 0 0" position="0 0 0" scale="0.05 0.05 0.05" src="#anime-girlModel"></a-gltf-model>
  </a-entity>
  <a-entity mindar-image-target="targetIndex: 2">
    <a-gltf-model rotation="0 0 0" position="0 0 0" scale="0.2 0.2 0.2" src="#blue-archiveModel"></a-gltf-model>
  </a-entity>
  <a-entity mindar-image-target="targetIndex: 3">
    <a-gltf-model rotation="0 0 0" position="-0.1 0 0" scale="0.15 0.15 0.15" src="#cyber-girlModel"></a-gltf-model>
  </a-entity>
  <a-entity mindar-image-target="targetIndex: 4">
    <a-gltf-model rotation="0 0 0" position="0 0 0" scale="0.15 0.15 0.15" src="#dancing-girlModel"></a-gltf-model>
  </a-entity>
  <a-entity mindar-image-target="targetIndex: 5">
    <a-gltf-model rotation="0 45 0" position="0 0 0" scale="0.0039 0.0039 0.0039" src="#elf-girlModel"></a-gltf-model>
  </a-entity>
  <a-entity mindar-image-target="targetIndex: 6">
    <a-gltf-model rotation="0 0 0" position="0 0 0" scale="15 15 15" src="#lightningModel"></a-gltf-model>
  </a-entity>
  <a-entity mindar-image-target="targetIndex: 7">
    <a-gltf-model rotation="0 0 0" position="0 0 0" scale="0.09 0.09 0.09" src="#miyuModel"></a-gltf-model>
  </a-entity>
  <a-entity mindar-image-target="targetIndex: 8">
    <a-gltf-model rotation="0 180 0" position="0 0 0" scale="0.18 0.18 0.18" src="#scifi-girlModel"></a-gltf-model>
  </a-entity>
  <a-entity mindar-image-target="targetIndex: 9">
    <a-image position="0 .5 0" rotation="0 0 0" width="1" height="1" src="#bg-2"></a-image>
    <a-gltf-model rotation="0 0 0" position="0 0 0" scale="0.0008 0.0008 0.0008" src="#tifaModel"></a-gltf-model>
  </a-entity>
  `;

  /* mainContainer.innerHTML += aScene; */
}


document.addEventListener("DOMContentLoaded", function() {
  const background = ["background-1", "background-2"];

  const setSelected = (button, bottonList) => {
    bottonList.forEach((e) => {
      if (e.classList.contains('selected')) {
        e.classList.remove("selected");
      }
    })
    if (button.classList.contains('selected')) {
      button.classList.remove("selected");
    } else {
      button.classList.add("selected");
    }
  }

  background.forEach((e, index) => {
    const buttonList = document.querySelectorAll(".bg-icon");
    const button = document.querySelector("#" + e);

    const backgroundImage = document.querySelector("#" + e + "-image");
    const backgroundEntity = document.querySelectorAll(".background-entity");
    
    button.addEventListener('click', () => {
      console.log(backgroundImage);
      setSelected(button, buttonList);
    });
  });
})