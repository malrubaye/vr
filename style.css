function createBroadcaster(streamId) {
  // create video element
  var video = document.createElement('video');
  video.id = "faceVideo-" + streamId;
  video.setAttribute('webkit-playsinline', 'webkit-playsinline');
  video.setAttribute('playsinline', 'playsinline');
  video.setAttribute('poster', '/imgs/no-video.jpg');
  console.log(video);
  // add video object to the DOM
  document.querySelector("a-assets").appendChild(video);

  // configure the new broadcaster
  const gltfModel = "#broadcaster";
  const scale = "1 1 1";
  const offset = streamCount;
  const position = offset + " -1 0";
  const rotation = "0 0 0";

  // create the broadcaster element using the given settings
  const parent = document.querySelector('a-scene');
  var newBroadcaster = document.createElement('a-gltf-model');
  newBroadcaster.setAttribute('id', streamId);
  newBroadcaster.setAttribute('gltf-model', gltfModel);
  newBroadcaster.setAttribute('scale', scale);
  newBroadcaster.setAttribute('position', position);
  newBroadcaster.setAttribute('rotation', rotation);
  parent.appendChild(newBroadcaster);

  console.log(newBroadcaster);
  // add event listener for model loaded:
  newBroadcaster.addEventListener('model-loaded', () => {
    var mesh = newBroadcaster.getObject3D('mesh');
    mesh.traverse((node) => {
      // search the mesh's children for the face-geo
      if (node.isMesh && node.name == 'face-geo') {
        // create video texture from video element
        var texture = new THREE.VideoTexture(video);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.flipY = false;
        // set node's material map to video texture
        node.material.map = texture
        node.material.color = new THREE.Color();
        node.material.metalness = 0;
      }
    });
  });
}
