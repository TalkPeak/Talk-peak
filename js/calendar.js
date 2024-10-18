document.addEventListener("DOMContentLoaded", function() {
    const daysContainer = document.getElementById("days");
    const daysInMonth = 31; // 10월의 일 수
    const startDay = new Date(2024, 9, 1).getDay(); // 2024년 10월 1일의 요일 (0: 일요일, 1: 월요일, ... 6: 토요일)

    const modal = document.getElementById("modal");
    const closeModalBtn = document.getElementById("close-btn");
    const saveDiaryBtn = document.getElementById("save-diary");
    const diaryText = document.getElementById("diary-text");
    const writeDiaryBtn = document.getElementById("write-diary");
    const modalTitle = document.getElementById("modal-title");

    let selectedDate = null; // 선택된 날짜 저장 변수
    const diaryEntries = {}; // 일기 데이터를 저장하는 객체

    // 요일 헤더 생성
    const weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    weekdays.forEach((day, index) => {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        if (index === 5 || index === 6) { // 토요일과 일요일을 빨간색으로
            dayElement.classList.add("red");
        }
        dayElement.textContent = day;
        daysContainer.appendChild(dayElement);
    });

    // 빈 칸 추가 (1일이 시작하기 전의 빈 칸)
    for (let i = 0; i < startDay; i++) {
        const emptyElement = document.createElement("div");
        emptyElement.classList.add("day");
        daysContainer.appendChild(emptyElement);
    }

    // 날짜 채우기
    for (let i = 1; i <= daysInMonth; i++) {
        const dateElement = document.createElement("div");
        dateElement.classList.add("day");

        // 특정 날짜에 빨간색 적용
        if ([4, 5, 11, 12, 18, 19, 25, 26].includes(i)) {
            dateElement.classList.add("red");
        }

        dateElement.textContent = i;

        // 날짜 클릭 시 이벤트 추가
        dateElement.addEventListener("click", function() {
            selectedDate = i; // 선택된 날짜 저장
            document.querySelectorAll('.day').forEach(day => day.classList.remove('selected'));
            dateElement.classList.add("selected");

            // 만약 일기가 이미 저장되어 있다면 팝업을 열어 내용을 보여줌
            if (diaryEntries[selectedDate]) {
                modal.style.display = "flex";
                modalTitle.textContent = `10월 ${selectedDate}일의 일기를 확인 할게요!`;
                diaryText.value = diaryEntries[selectedDate];
                diaryText.readOnly = true; // 읽기 전용으로 설정
                saveDiaryBtn.textContent = "일기 확인 끝내기"; // 버튼 텍스트 변경
            }
        });

        // 이미 저장된 일기가 있으면 분홍색 배경 적용
        if (diaryEntries[i]) {
            dateElement.classList.add("highlighted");
        }

        daysContainer.appendChild(dateElement);
    }

    // "오늘의 일기 작성하기" 버튼 클릭 시 팝업 열기
    writeDiaryBtn.addEventListener("click", function() {
        if (selectedDate !== null) {
            modal.style.display = "flex";
            if (diaryEntries[selectedDate]) {
                modalTitle.textContent = `10월 ${selectedDate}일의 일기 수정`;
                diaryText.readOnly = false; // 수정 가능하도록 설정
                saveDiaryBtn.textContent = "수정하기";
            } else {
                modalTitle.textContent = `10월 ${selectedDate}일의 일기 작성할게요!`;
                diaryText.readOnly = false; // 작성 가능하도록 설정
                diaryText.value = ""; // 빈 내용으로 초기화
                saveDiaryBtn.textContent = "일기 작성 끝내기";
            }
        } else {
            alert("날짜를 먼저 선택해주세요.");
        }
    });

    // 모달 닫기 버튼 이벤트
    closeModalBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // 모달 외부 클릭 시 닫기
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // 저장/수정 버튼 클릭 시 일기 저장 또는 수정
    saveDiaryBtn.addEventListener("click", function() {
        if (selectedDate !== null) {
            if (diaryEntries[selectedDate] && diaryText.readOnly) {
                // 일기 확인 모드일 때는 모달 닫기
                modal.style.display = "none";
            } else {
                // 일기 작성 또는 수정 모드일 때
                const diaryContent = diaryText.value;
                diaryEntries[selectedDate] = diaryContent; // 해당 날짜에 일기 저장

                // 저장된 일기 날짜에 분홍색 배경을 추가하여 하이라이트
                const dateElements = document.querySelectorAll('.day');
                dateElements.forEach((day) => {
                    if (parseInt(day.textContent) === selectedDate) {
                        day.classList.add("highlighted");
                    }
                });

                console.log(`10월 ${selectedDate}일의 일기:`, diaryContent);
                modal.style.display = "none";
            }
        }
    });
});
