import * as THREE from "three";

console.log(THREE);

// 1. 创建场景
const scene = new THREE.Scene();

scene.background = new THREE.Color("#ccc");

// 2. 创建对象
// 创建立方体
const geometry = new THREE.BoxGeometry(1, 1, 1);

// 创建蓝色填充材质
const material = new THREE.MeshBasicMaterial({
  color: "blue", // 蓝色填充
});

// 创建网格
const mesh = new THREE.Mesh(geometry, material);

// 创建线框几何体
const edges = new THREE.EdgesGeometry(geometry);

// 创建红色线框材质
const lineMaterial = new THREE.LineBasicMaterial({ color: "red" });

// 创建线框网格
const line = new THREE.LineSegments(edges, lineMaterial);

// 创建一个组，将网格和线框都添加到这个组
const group = new THREE.Group();
group.add(mesh);
group.add(line);

// 将组添加到场景中
scene.add(group);

// 3. 创建相机
// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// 4. 创建渲染器
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);

function animate() {
  requestAnimationFrame(animate);

  group.rotation.x += 0.01;
  group.rotation.y += 0.03;

  renderer.render(scene, camera);
}
animate();
