// Hàm sắp xếp nổi bọt (Bubble Sort)
function bubbleSort(arr) {
    let steps = [];
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
            steps.push([...arr]); // Lưu lại trạng thái sau mỗi lần đổi chỗ
        }
    }
    return steps;
}

// Hàm sắp xếp chọn (Selection Sort)
function selectionSort(arr) {
    let steps = [];
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
        steps.push([...arr]); // Lưu lại trạng thái sau mỗi lần đổi chỗ
    }
    return steps;
}

// Hàm sắp xếp chèn (Insertion Sort)
function insertionSort(arr) {
    let steps = [];
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
            steps.push([...arr]);
        }
        arr[j + 1] = key;
        steps.push([...arr]);
    }
    return steps;
}

// Hàm kiểm tra đầu vào
function validateInput(input) {
    if (!input) {
        alert('Vui lòng nhập mảng.');
        return false;
    }

    const array = input.split(',').map(item => item.trim());
    
    // Kiểm tra nếu có giá trị nào không phải số
    for (let item of array) {
        if (isNaN(item) || item === '') {
            alert('Vui lòng đảm bảo tất cả các số đều hợp lệ và được cách nhau bằng dấu ",".');
            return false;
        }
    }
    
    return true;
}

// Hàm chính để thực hiện sắp xếp
function performSort() {
    const arrayInput = document.getElementById("arrayInput").value;
    
    // Kiểm tra đầu vào
    if (!validateInput(arrayInput)) {
        return;
    }
    
    const algorithm = document.querySelector('input[name="algorithm"]:checked').value;
    
    // Chuyển chuỗi nhập thành mảng số
    let array = arrayInput.split(",").map(Number);
    
    let steps;
    if (algorithm === "bubble") {
        steps = bubbleSort(array);
    } else if (algorithm === "selection") {
        steps = selectionSort(array);
    } else if (algorithm === "insertion") {
        steps = insertionSort(array);
    }
    
    // Hiển thị kết quả sắp xếp
    document.getElementById("sortedArray").innerText = `Mảng sau khi sắp xếp: ${array.join(", ")}`;
    
    // Hiển thị từng bước sắp xếp
    document.getElementById("sortingSteps").innerHTML = "Các bước sắp xếp:<br>";
    steps.forEach((step, index) => {
        document.getElementById("sortingSteps").innerHTML += `-->:     ${step.join(", ")}<br>`;
    });
}

// Gán sự kiện cho nút "Sắp xếp"
document.getElementById("sortButton").addEventListener("click", performSort);
