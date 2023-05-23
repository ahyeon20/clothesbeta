const fileInput = document.getElementById("fileUpload");
const uploadButton = document.getElementById("uploadButton");

const handleFiles = () => {
  const selectedFile = fileInput.files[0];
  const fileReader = new FileReader();

  fileReader.onload = function () {
    const previewImg = document.getElementById("previewImg");
    previewImg.src = fileReader.result;
    previewImg.alt = selectedFile.name;
  };

  if (selectedFile) {
    fileReader.readAsDataURL(selectedFile);
  }
};

const uploadImage = () => {
  const selectedFile = fileInput.files[0];

  if (selectedFile) {
    const formData = new FormData();
    formData.append("image", selectedFile);

    // 여기에 이미지를 업로드하는 Ajax 요청 코드를 작성합니다.
    // 실제 서버로 이미지를 업로드하는 방식에 따라 코드를 변경해야 합니다.

    console.log("이미지 업로드:", selectedFile);
  } else {
    console.log("이미지를 선택해주세요.");
  }
};

fileInput.addEventListener("change", handleFiles);
uploadButton.addEventListener("click", uploadImage);



function toggleBox(boxId) {
    const box = document.getElementById(boxId);
    box.style.display = (box.style.display === 'none') ? 'block' : 'none';
  }





  const saveButton = document.getElementById('saveButton');
const loadButton = document.getElementById('loadButton');
const imageContainer = document.getElementById('imageContainer');
let savedImage = null;

saveButton.addEventListener('click', saveImage);
loadButton.addEventListener('click', loadImage);

function saveImage() {
  // 이미지를 저장하는 로직
  // 예시로 이미지 URL을 저장하도록 하겠습니다.
  const imageUrl = 'https://example.com/image.jpg';
  savedImage = imageUrl;
  console.log('이미지가 저장되었습니다.');
}

function loadImage() {
  if (savedImage) {
    // 저장된 이미지가 있을 경우 이미지 컨테이너에 이미지를 표시합니다.
    const imageElement = document.createElement('img');
    imageElement.src = savedImage;
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imageElement);
  } else {
    console.log('저장된 이미지가 없습니다.');
  }
}
