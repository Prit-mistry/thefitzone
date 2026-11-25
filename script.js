
// FITZONE EXERCISE DATABASE


const exercises = [
    {
        name: "Push Ups",
        muscle: "Chest",
        equipment: "Bodyweight",
        image: "images/push-ups.svg",
        video: "WDIpL0pjun0",
        instructions: [
            "Start in a plank position.",
            "Place your hands slightly wider than your shoulders.",
            "Lower your chest slowly toward the floor.",
            "Push back up while keeping your body aligned."
        ],
        breathing: "Breathe in while lowering and breathe out while pushing up.",
        mistakes: ["Letting your hips sag", "Moving too quickly", "Not maintaining body alignment"],
        sets: "2-3",
        reps: "8-12"
    },
    {
        name: "Dumbbell Bench Press",
        muscle: "Chest",
        equipment: "Dumbbell",
        image: "images/dumbbell-bench-press.svg",
        video: "WLTU1j7Ur8M",
        instructions: [
            "Lie on a flat bench with a dumbbell in each hand.",
            "Keep your feet stable on the floor.",
            "Lower the dumbbells with control.",
            "Press them upward without forcefully locking your elbows."
        ],
        breathing: "Breathe in while lowering and breathe out while pressing.",
        mistakes: ["Bouncing the weights", "Using excessive weight", "Losing control of the movement"],
        sets: "2-3",
        reps: "8-12"
    },
    {
        name: "Pull Ups",
        muscle: "Back",
        equipment: "Bodyweight",
        image: "images/pull-ups.svg",
        video: "8Y6cXd9G2Rk",
        instructions: [
            "Hold a stable pull-up bar with an overhand grip.",
            "Start with your arms extended comfortably.",
            "Pull your body upward with control.",
            "Lower yourself slowly to the starting position."
        ],
        breathing: "Breathe out while pulling up and breathe in while lowering.",
        mistakes: ["Swinging excessively", "Using momentum", "Dropping too quickly"],
        sets: "2-3",
        reps: "As many controlled reps as comfortable"
    },
    {
        name: "Lat Pulldown",
        muscle: "Back",
        equipment: "Machine",
        image: "images/lat-pulldown.svg",
        video: "rpkWBC1gCcE",
        instructions: [
            "Sit facing the lat pulldown machine.",
            "Hold the bar slightly wider than shoulder-width.",
            "Pull the bar toward your upper chest.",
            "Return the bar slowly without losing control."
        ],
        breathing: "Breathe out while pulling down and breathe in while returning.",
        mistakes: ["Pulling behind the neck", "Leaning too far backward", "Using momentum"],
        sets: "2-3",
        reps: "10-12"
    },
    {
        name: "Shoulder Press",
        muscle: "Shoulders",
        equipment: "Dumbbell",
        image: "images/shoulder-press.svg",
        video: "bmy7tIopNt4",
        instructions: [
            "Sit or stand with a dumbbell in each hand.",
            "Position the dumbbells near shoulder level.",
            "Press upward in a controlled movement.",
            "Lower them slowly to the starting position."
        ],
        breathing: "Breathe out while pressing and breathe in while lowering.",
        mistakes: ["Arching the lower back", "Using excessive weight", "Rushing repetitions"],
        sets: "2-3",
        reps: "8-12"
    },
    {
        name: "Lateral Raises",
        muscle: "Shoulders",
        equipment: "Dumbbell",
        image: "images/lateral-raises.svg",
        video: "XPPfnSEATJA",
        instructions: [
            "Stand upright with dumbbells beside your body.",
            "Keep a slight bend in your elbows.",
            "Raise your arms outward with control.",
            "Lower the dumbbells slowly."
        ],
        breathing: "Breathe out while raising and breathe in while lowering.",
        mistakes: ["Swinging your body", "Shrugging your shoulders", "Using excessive weight"],
        sets: "2-3",
        reps: "10-15"
    },
    {
        name: "Dumbbell Curls",
        muscle: "Biceps",
        equipment: "Dumbbell",
        image: "images/dumbbell-curls.svg",
        video: "DgTlETfEuEU",
        instructions: [
            "Stand with dumbbells beside your body.",
            "Keep your elbows close to your sides.",
            "Curl the dumbbells toward your shoulders.",
            "Lower them slowly."
        ],
        breathing: "Breathe out while curling and breathe in while lowering.",
        mistakes: ["Swinging your back", "Moving your elbows excessively", "Dropping weights quickly"],
        sets: "2-3",
        reps: "10-12"
    },
    {
        name: "Barbell Curls",
        muscle: "Biceps",
        equipment: "Barbell",
        image: "images/barbell-curls.svg",
        video: "RK47T0F276I",
        instructions: [
            "Stand holding a barbell with an underhand grip.",
            "Keep your elbows close to your sides.",
            "Curl the bar toward your shoulders.",
            "Lower it slowly."
        ],
        breathing: "Breathe out while curling and breathe in while lowering.",
        mistakes: ["Leaning backward", "Swinging the bar", "Using excessive weight"],
        sets: "2-3",
        reps: "8-12"
    },
    {
        name: "Triceps Pushdown",
        muscle: "Triceps",
        equipment: "Cable",
        image: "images/triceps-pushdown.svg",
        video: "nMqQNGo4Jtg",
        instructions: [
            "Stand facing a cable machine.",
            "Hold the attachment with elbows near your sides.",
            "Push the attachment downward.",
            "Return slowly to the starting position."
        ],
        breathing: "Breathe out while pushing down and breathe in while returning.",
        mistakes: ["Moving your elbows excessively", "Leaning too far forward", "Using momentum"],
        sets: "2-3",
        reps: "10-12"
    },
    {
        name: "Diamond Push Ups",
        muscle: "Triceps",
        equipment: "Bodyweight",
        image: "images/diamond-push-ups.svg",
        video: "kGhDnFwMY3E",
        instructions: [
            "Start in a plank position.",
            "Place your hands close together beneath your chest.",
            "Lower yourself with control.",
            "Push back up while keeping your body aligned."
        ],
        breathing: "Breathe in while lowering and breathe out while pushing up.",
        mistakes: ["Letting hips sag", "Forcing uncomfortable wrist positions", "Moving too quickly"],
        sets: "2",
        reps: "5-10"
    },
    {
        name: "Bodyweight Squats",
        muscle: "Legs",
        equipment: "Bodyweight",
        image: "images/bodyweight-squats.svg",
        video: "ZLJBfYF_oO0",
        instructions: [
            "Stand with feet around shoulder-width apart.",
            "Bend your hips and knees to lower yourself.",
            "Keep your feet flat and knees tracking with your toes.",
            "Stand up smoothly."
        ],
        breathing: "Breathe in while lowering and breathe out while standing.",
        mistakes: ["Lifting your heels", "Letting knees collapse inward", "Rushing the movement"],
        sets: "2-3",
        reps: "10-15"
    },
    {
        name: "Leg Press",
        muscle: "Legs",
        equipment: "Machine",
        image: "images/leg-press.svg",
        video: "90NY9tka1TQ",
        instructions: [
            "Sit securely in the leg press machine.",
            "Place your feet comfortably on the platform.",
            "Lower the platform within a comfortable range.",
            "Press it away without forcefully locking your knees."
        ],
        breathing: "Breathe in while lowering and breathe out while pressing.",
        mistakes: ["Locking knees forcefully", "Lowering beyond comfortable range", "Lifting hips from the seat"],
        sets: "2-3",
        reps: "10-12"
    },
    {
        name: "Crunches",
        muscle: "Abs",
        equipment: "Bodyweight",
        image: "images/crunches.svg",
        video: "lX--crZaY_c",
        instructions: [
            "Lie on your back with knees bent.",
            "Place your hands gently beside your head or across your chest.",
            "Lift your shoulders slightly using your abdominal muscles.",
            "Lower yourself slowly."
        ],
        breathing: "Breathe out while lifting and breathe in while lowering.",
        mistakes: ["Pulling your neck", "Using momentum", "Lifting too high"],
        sets: "2-3",
        reps: "10-15"
    },
    {
        name: "Plank",
        muscle: "Abs",
        equipment: "Bodyweight",
        image: "images/plank.svg",
        video: "BQu26ABuVS0",
        instructions: [
            "Place your forearms on the floor.",
            "Extend your legs behind you.",
            "Keep your body in a comfortable straight line.",
            "Hold while breathing normally."
        ],
        breathing: "Breathe steadily throughout the hold.",
        mistakes: ["Letting hips sag", "Raising hips too high", "Holding your breath"],
        sets: "2",
        reps: "15-30 seconds"
    },
    {
        name: "Standing Calf Raises",
        muscle: "Calves",
        equipment: "Bodyweight",
        image: "images/standing-calf-raises.svg",
        video: "KRJIKsY02nE",
        instructions: [
            "Stand upright with feet comfortably apart.",
            "Rise onto the balls of your feet.",
            "Pause briefly at the top.",
            "Lower your heels slowly."
        ],
        breathing: "Breathe out while rising and breathe in while lowering.",
        mistakes: ["Bouncing", "Using momentum", "Moving too quickly"],
        sets: "2-3",
        reps: "12-15"
    },
    {
        name: "Seated Calf Raises",
        muscle: "Calves",
        equipment: "Machine",
        image: "images/seated-calf-raises.svg",
        video: "smyXy_dhXo8",
        instructions: [
            "Sit securely on a calf raise machine.",
            "Place the balls of your feet on the platform.",
            "Raise your heels smoothly.",
            "Lower them slowly through a comfortable range."
        ],
        breathing: "Breathe out while raising and breathe in while lowering.",
        mistakes: ["Bouncing at the bottom", "Using excessive weight", "Rushing repetitions"],
        sets: "2-3",
        reps: "12-15"
    },
    {
        name: "Incline Dumbbell Press",
        muscle: "Chest",
        equipment: "Dumbbell",
        image: "images/incline-dumbbell-press.svg",
        video: "VDU5bzE2qOE",
        instructions: [
            "Set a bench to a gentle incline and sit back with a dumbbell in each hand.",
            "Start with the dumbbells above your upper chest.",
            "Lower them slowly until your elbows are about level with your body.",
            "Press upward with control without slamming the dumbbells together."
        ],
        breathing: "Breathe in while lowering and breathe out while pressing.",
        mistakes: ["Setting the bench too steep", "Flaring elbows straight out", "Using weights that are too heavy"],
        sets: "2-3",
        reps: "8-12"
    },
    {
        name: "Cable Chest Fly",
        muscle: "Chest",
        equipment: "Cable",
        image: "images/cable-chest-fly.svg",
        video: "ETtXO4FW1EU",
        instructions: [
            "Stand in the middle of a cable machine with the handles set at about shoulder height.",
            "Step forward slightly with a soft bend in your elbows.",
            "Bring your hands together in front of your chest in a wide arc.",
            "Open your arms slowly back to the starting position."
        ],
        breathing: "Breathe out while bringing your hands together and breathe in while opening.",
        mistakes: ["Straightening and bending the elbows during the movement", "Leaning forward too far", "Letting the weight pull your arms back quickly"],
        sets: "2-3",
        reps: "10-15"
    },
    {
        name: "Barbell Bench Press",
        muscle: "Chest",
        equipment: "Barbell",
        image: "images/barbell-bench-press.svg",
        video: "XFKZ6Yw8XbE",
        instructions: [
            "Lie on a flat bench with your eyes under the bar and feet flat on the floor.",
            "Grip the bar slightly wider than shoulder-width.",
            "Lower the bar slowly to your mid-chest.",
            "Press it back up evenly until your arms are extended."
        ],
        breathing: "Breathe in while lowering and breathe out while pressing.",
        mistakes: ["Bouncing the bar off your chest", "Lifting your hips off the bench", "Pressing without a spotter or safety bars on heavy sets"],
        sets: "2-3",
        reps: "6-10"
    },
    {
        name: "Seated Cable Row",
        muscle: "Back",
        equipment: "Cable",
        image: "images/seated-cable-row.svg",
        video: "EU7bOadUsNI",
        instructions: [
            "Sit at a cable row station with your feet on the platform and knees slightly bent.",
            "Hold the handle with your arms reaching forward and your back tall.",
            "Pull the handle toward your lower ribs while squeezing your shoulder blades.",
            "Return slowly until your arms are extended again."
        ],
        breathing: "Breathe out while pulling and breathe in while returning.",
        mistakes: ["Rocking your body back and forth", "Shrugging your shoulders", "Rounding your lower back"],
        sets: "2-3",
        reps: "10-12"
    },
    {
        name: "One-Arm Dumbbell Row",
        muscle: "Back",
        equipment: "Dumbbell",
        image: "images/one-arm-dumbbell-row.svg",
        video: "vbechsUCn24",
        instructions: [
            "Place one hand and the same-side knee on a flat bench.",
            "Keep your back flat and hold a dumbbell in your free hand.",
            "Pull the dumbbell toward your hip, keeping your elbow close to your body.",
            "Lower it slowly until your arm is straight."
        ],
        breathing: "Breathe out while pulling and breathe in while lowering.",
        mistakes: ["Twisting your torso", "Pulling with momentum", "Letting your back round"],
        sets: "2-3",
        reps: "8-12 each arm"
    },
    {
        name: "Barbell Bent-Over Row",
        muscle: "Back",
        equipment: "Barbell",
        image: "images/barbell-bent-over-row.svg",
        video: "qXrTDQG1oUQ",
        instructions: [
            "Stand with feet hip-width apart holding a barbell with an overhand grip.",
            "Hinge forward at the hips with a flat back and soft knees.",
            "Pull the bar toward your lower chest.",
            "Lower it slowly under control."
        ],
        breathing: "Breathe out while pulling and breathe in while lowering.",
        mistakes: ["Rounding your back", "Standing up with each rep", "Using weight that is too heavy for your form"],
        sets: "2-3",
        reps: "8-10"
    },
    {
        name: "Face Pulls",
        muscle: "Shoulders",
        equipment: "Cable",
        image: "images/face-pulls.svg",
        video: "6chrLjsE47c",
        instructions: [
            "Set a cable pulley at about face height with a rope attachment.",
            "Hold the rope with both hands and step back until your arms are extended.",
            "Pull the rope toward your face, spreading your hands apart.",
            "Return slowly with control."
        ],
        breathing: "Breathe out while pulling and breathe in while returning.",
        mistakes: ["Using too much weight", "Leaning back to pull", "Letting your elbows drop low"],
        sets: "2-3",
        reps: "12-15"
    },
    {
        name: "Front Raises",
        muscle: "Shoulders",
        equipment: "Dumbbell",
        image: "images/front-raises.svg",
        video: "qmFQTDYwpsg",
        instructions: [
            "Stand tall holding a dumbbell in front of each thigh.",
            "Keep a slight bend in your elbows.",
            "Raise your arms forward to about shoulder height.",
            "Lower them slowly to the starting position."
        ],
        breathing: "Breathe out while raising and breathe in while lowering.",
        mistakes: ["Swinging your body", "Lifting higher than shoulder height", "Using weights that are too heavy"],
        sets: "2-3",
        reps: "10-12"
    },
    {
        name: "Overhead Triceps Extension",
        muscle: "Triceps",
        equipment: "Dumbbell",
        image: "images/overhead-triceps-extension.svg",
        video: "IJ6J7EKprsc",
        instructions: [
            "Stand or sit holding one dumbbell with both hands above your head.",
            "Keep your upper arms close to your ears.",
            "Bend your elbows to lower the dumbbell behind your head.",
            "Straighten your arms to lift it back up."
        ],
        breathing: "Breathe in while lowering and breathe out while extending.",
        mistakes: ["Flaring your elbows out", "Arching your lower back", "Dropping the weight too fast"],
        sets: "2-3",
        reps: "10-12"
    },
    {
        name: "Bench Dips",
        muscle: "Triceps",
        equipment: "Bodyweight",
        image: "images/bench-dips.svg",
        video: "WVeZDBhZwLA",
        instructions: [
            "Sit on the edge of a stable bench and place your hands beside your hips.",
            "Slide your hips forward off the bench with your legs extended or knees bent.",
            "Bend your elbows to lower your body until they reach about 90 degrees.",
            "Press back up until your arms are straight."
        ],
        breathing: "Breathe in while lowering and breathe out while pressing up.",
        mistakes: ["Going too deep and stressing the shoulders", "Letting your shoulders roll forward", "Moving the hips far away from the bench"],
        sets: "2",
        reps: "6-10"
    },
    {
        name: "Lunges",
        muscle: "Legs",
        equipment: "Bodyweight",
        image: "images/lunges.svg",
        video: "tRalDvBwZqg",
        instructions: [
            "Stand tall with your feet together.",
            "Step forward with one leg and lower your body.",
            "Lower until both knees bend to about 90 degrees.",
            "Push through your front foot to return to standing, then switch legs."
        ],
        breathing: "Breathe in while lowering and breathe out while standing.",
        mistakes: ["Letting your front knee collapse inward", "Taking too short a step", "Leaning your torso too far forward"],
        sets: "2-3",
        reps: "8-10 each leg"
    },
    {
        name: "Goblet Squat",
        muscle: "Legs",
        equipment: "Dumbbell",
        image: "images/goblet-squat.svg",
        video: "6mf0oa2GGUc",
        instructions: [
            "Hold one dumbbell close to your chest with both hands.",
            "Stand with your feet slightly wider than shoulder-width.",
            "Bend your hips and knees to lower into a squat with your chest up.",
            "Press through your feet to stand back up."
        ],
        breathing: "Breathe in while lowering and breathe out while standing.",
        mistakes: ["Letting your heels lift", "Rounding your upper back", "Letting your knees cave inward"],
        sets: "2-3",
        reps: "8-12"
    },
    {
        name: "Romanian Deadlift",
        muscle: "Legs",
        equipment: "Barbell",
        image: "images/romanian-deadlift.svg",
        video: "Roe2hOnzXf4",
        instructions: [
            "Stand holding a barbell in front of your thighs with soft knees.",
            "Push your hips back while keeping your back flat and the bar close to your legs.",
            "Lower the bar to about mid-shin or until you feel a hamstring stretch.",
            "Drive your hips forward to stand tall again."
        ],
        breathing: "Breathe in while lowering and breathe out while standing.",
        mistakes: ["Rounding your back", "Letting the bar drift away from your legs", "Bending the knees too much so it becomes a squat"],
        sets: "2-3",
        reps: "8-10"
    },
    {
        name: "Leg Extensions",
        muscle: "Legs",
        equipment: "Machine",
        image: "images/leg-extensions.svg",
        video: "ECt7bZ9zc4c",
        instructions: [
            "Sit on the machine with your back against the pad and the roller on your lower shins.",
            "Hold the side handles.",
            "Straighten your legs until they are almost fully extended.",
            "Lower slowly back to the starting position."
        ],
        breathing: "Breathe out while extending and breathe in while lowering.",
        mistakes: ["Using momentum to swing the weight", "Locking your knees forcefully", "Lifting your hips from the seat"],
        sets: "2-3",
        reps: "10-15"
    },
    {
        name: "Glute Bridge",
        muscle: "Legs",
        equipment: "Bodyweight",
        image: "images/glute-bridge.svg",
        video: "KI6fjDqGZh4",
        instructions: [
            "Lie on your back with your knees bent and feet flat on the floor.",
            "Keep your arms resting by your sides.",
            "Squeeze your glutes and lift your hips until your body forms a straight line from shoulders to knees.",
            "Lower slowly back to the floor."
        ],
        breathing: "Breathe out while lifting and breathe in while lowering.",
        mistakes: ["Arching your lower back at the top", "Pushing through your toes instead of your heels", "Rushing the movement"],
        sets: "2-3",
        reps: "10-15"
    },
    {
        name: "Leg Raises",
        muscle: "Abs",
        equipment: "Bodyweight",
        image: "images/leg-raises.svg",
        video: "Wp4BlxcFTkE",
        instructions: [
            "Lie flat on your back with your legs straight and your hands beside your hips.",
            "Keep your lower back gently pressed toward the floor.",
            "Raise your legs until they are pointing toward the ceiling.",
            "Lower them slowly without letting them touch the floor."
        ],
        breathing: "Breathe out while raising and breathe in while lowering.",
        mistakes: ["Arching your lower back", "Swinging the legs with momentum", "Lowering too fast"],
        sets: "2",
        reps: "8-12"
    },
    {
        name: "Mountain Climbers",
        muscle: "Abs",
        equipment: "Bodyweight",
        image: "images/mountain-climbers.svg",
        video: "gW-q50V6Z_0",
        instructions: [
            "Start in a high plank with your hands under your shoulders.",
            "Keep your body in a straight line from head to heels.",
            "Drive one knee toward your chest.",
            "Switch legs in a smooth running motion."
        ],
        breathing: "Breathe steadily and rhythmically throughout the exercise.",
        mistakes: ["Letting your hips rise too high", "Bouncing instead of controlling the movement", "Holding your breath"],
        sets: "2-3",
        reps: "20-30 seconds"
    },
    {
        name: "Cable Curls",
        muscle: "Biceps",
        equipment: "Cable",
        image: "images/cable-curls.svg",
        video: "pEVXvlVKm80",
        instructions: [
            "Attach a straight bar or handle to a low pulley and stand facing the machine.",
            "Hold the handle with an underhand grip and keep your elbows by your sides.",
            "Curl the handle toward your shoulders.",
            "Lower it slowly until your arms are almost straight."
        ],
        breathing: "Breathe out while curling and breathe in while lowering.",
        mistakes: ["Swinging your back", "Letting your elbows drift forward", "Dropping the weight too quickly"],
        sets: "2-3",
        reps: "10-12"
    }
];



// SELECT HTML ELEMENTS

const exerciseList = document.getElementById("exerciseList");
const searchInput = document.getElementById("searchExercise");
const equipmentFilter = document.getElementById("equipmentFilter");
const exerciseCount = document.getElementById("exerciseCount");
const noResults = document.getElementById("noResults");

const modal = document.getElementById("exerciseModal");
const closeModal = document.getElementById("closeModal");

let selectedMuscle = "All";


// DISPLAY EXERCISES

function displayExercises() {

    const searchValue = searchInput.value.toLowerCase();
    const equipmentValue = equipmentFilter.value;

    const filteredExercises = exercises.filter(function (exercise) {

        const matchesMuscle =
            selectedMuscle === "All" ||
            exercise.muscle === selectedMuscle;

        const matchesSearch =
            exercise.name.toLowerCase().includes(searchValue) ||
            exercise.muscle.toLowerCase().includes(searchValue);

        const matchesEquipment =
            equipmentValue === "all" ||
            exercise.equipment === equipmentValue;

        return matchesMuscle && matchesSearch && matchesEquipment;
    });

    exerciseList.innerHTML = "";

    exerciseCount.textContent =
        filteredExercises.length + " Exercises";

    noResults.hidden = filteredExercises.length !== 0;

    filteredExercises.forEach(function (exercise) {

        const originalIndex = exercises.indexOf(exercise);

        const card = document.createElement("div");
        card.className = "exercise-card";

        card.innerHTML = `
            <img class="exercise-card-image"
                 src="${exercise.image}"
                 alt="${exercise.name}"
                 loading="lazy">

            <div class="exercise-info">

                <span class="exercise-tag">
                    ${exercise.muscle}
                </span>

                <h3>${exercise.name}</h3>

                <p>Equipment: ${exercise.equipment}</p>

                <button class="details-btn"
                    data-index="${originalIndex}">
                    View Details →
                </button>

            </div>
        `;

        // If an image fails to load, show the FITZONE placeholder instead
        card.querySelector(".exercise-card-image")
            .addEventListener("error", function () {
                card.classList.add("image-unavailable");
            });

        exerciseList.appendChild(card);
    });
}


// MUSCLE GROUP FILTER

document.querySelectorAll(".muscle-filter").forEach(function (button) {

    button.addEventListener("click", function () {

        document.querySelectorAll(".muscle-filter").forEach(function (btn) {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        selectedMuscle = this.dataset.muscle;

        displayExercises();
    });
});


// SEARCH

searchInput.addEventListener("input", displayExercises);


// EQUIPMENT FILTER

equipmentFilter.addEventListener("change", displayExercises);


// OPEN EXERCISE DETAILS

exerciseList.addEventListener("click", function (event) {

    const button = event.target.closest(".details-btn");

    if (!button) return;

    openExerciseModal(exercises[Number(button.dataset.index)]);
});


// CLOSE MODAL

function hideModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    // Clearing the video address stops playback
    document.getElementById("modalVideo").src = "";
    videoRequest++;
}

closeModal.addEventListener("click", hideModal);

modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        hideModal();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        hideModal();
    }
});


// INITIAL DISPLAY

displayExercises();



// FITZONE BMI CALCULATOR

const bmiForm = document.getElementById("bmiForm");
const bmiResult = document.getElementById("bmiResult");
const resetBMI = document.getElementById("resetBMI");

bmiForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const age = Number(document.getElementById("age").value);
    const height = Number(document.getElementById("height").value);
    const weight = Number(document.getElementById("weight").value);

    // Validate input
    if (
        !Number.isFinite(age) ||
        !Number.isFinite(height) ||
        !Number.isFinite(weight) ||
        age < 2 || age > 120 ||
        height < 50 || height > 250 ||
        weight < 2 || weight > 500
    ) {
        alert("Please enter valid age, height and weight.");
        return;
    }

    // Convert centimetres into metres
    const heightInMetres = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMetres * heightInMetres);

    // Display BMI
    document.getElementById("bmiValue").textContent =
        bmi.toFixed(1);

    const category = document.getElementById("bmiCategory");
    const message = document.getElementById("bmiMessage");

    if (age < 20) {

        category.textContent = "Age-specific interpretation needed";

        message.textContent =
            "Your BMI number is calculated, but an adult BMI category cannot be applied. For people under 20, interpretation requires an age- and sex-specific growth chart. A healthcare professional can help interpret it.";

    } else {

        // Adult categories, for ages 20 and above
        if (bmi < 18.5) {
            category.textContent = "Below adult reference range";
        } else if (bmi < 25) {
            category.textContent = "Within adult reference range";
        } else if (bmi < 30) {
            category.textContent = "Above adult reference range";
        } else {
            category.textContent = "Higher adult BMI range";
        }

        message.textContent =
            "This is a screening result, not a diagnosis. BMI does not measure body composition or determine overall health.";
    }

    bmiResult.hidden = false;

    bmiResult.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

});


// RESET CALCULATOR

resetBMI.addEventListener("click", function() {

    bmiForm.reset();

    bmiResult.hidden = true;

});

// FITZONE WORKOUT PLANNER

const plannerDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

const STORAGE_KEY = "fitzoneWorkoutPlans";

let selectedDay = "Monday";

let workoutPlans = {};


// LOAD SAVED WORKOUTS

try {
    workoutPlans = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "{}"
    );

    if (
        !workoutPlans ||
        typeof workoutPlans !== "object" ||
        Array.isArray(workoutPlans)
    ) {
        workoutPlans = {};
    }
} catch (error) {
    workoutPlans = {};
}


// SAVE WORKOUTS

function saveWorkoutPlans() {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(workoutPlans)
        );
    } catch (error) {
        alert("Unable to save your plan. Check browser storage.");
    }
}


// GET SELECTED DAY DATA

function getDayData(day) {

    if (
        !workoutPlans[day] ||
        typeof workoutPlans[day] !== "object" ||
        !Array.isArray(workoutPlans[day].exercises)
    ) {
        workoutPlans[day] = {
            exercises: [],
            completed: false
        };
    }

    return workoutPlans[day];
}


// SELECT DAY

document.querySelectorAll(".day-btn").forEach(function(button) {

    button.addEventListener("click", function() {

        document.querySelectorAll(".day-btn").forEach(function(btn) {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        selectedDay = this.dataset.day;

        renderWorkoutPlan();
    });

});


// RENDER WORKOUT PLAN

function renderWorkoutPlan() {

    const data = getDayData(selectedDay);

    const workoutList = document.getElementById("workoutList");

    const emptyWorkout = document.getElementById("emptyWorkout");

    const dayTitle = document.getElementById("selectedDayTitle");

    const dayStatus = document.getElementById("dayStatus");

    const completeBtn = document.getElementById("completeDayBtn");

    dayTitle.textContent = selectedDay;

    workoutList.replaceChildren();

    emptyWorkout.hidden = data.exercises.length > 0;

    data.exercises.forEach(function(exercise, index) {

        const card = document.createElement("div");

        card.className = "planned-exercise";

        if (exercise.done) {
            card.classList.add("done");
        }

        const left = document.createElement("div");
        left.className = "exercise-left";

        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.className = "exercise-check";
        checkbox.checked = exercise.done;

        checkbox.setAttribute(
            "aria-label",
            "Complete " + exercise.name
        );

        checkbox.addEventListener("change", function() {

            exercise.done = checkbox.checked;

            updateDayCompletion();

            saveWorkoutPlans();

            renderWorkoutPlan();

        });

        const details = document.createElement("div");

        const name = document.createElement("div");
        name.className = "exercise-name";
        name.textContent = exercise.name;

        const meta = document.createElement("div");
        meta.className = "exercise-meta";

        meta.textContent =
            exercise.sets + " sets • " +
            exercise.reps + " reps";

        details.append(name, meta);

        left.append(checkbox, details);

        const deleteButton = document.createElement("button");

        deleteButton.className = "delete-exercise";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {

            data.exercises.splice(index, 1);

            updateDayCompletion();

            saveWorkoutPlans();

            renderWorkoutPlan();

        });

        card.append(left, deleteButton);

        workoutList.appendChild(card);

    });


    // DAY STATUS

    dayStatus.textContent = data.completed
        ? "✓ Completed"
        : "Not completed";

    dayStatus.classList.toggle("completed", data.completed);

    completeBtn.disabled = data.completed;

    completeBtn.textContent = data.completed
        ? "✓ Workout Completed"
        : "✓ Mark Day Completed";

    updateWeeklyProgress();

}


// UPDATE DAY COMPLETION

function updateDayCompletion() {

    const data = getDayData(selectedDay);

    data.completed =
        data.exercises.length > 0 &&
        data.exercises.every(function(exercise) {
            return exercise.done === true;
        });

}


// ADD EXERCISE

document.getElementById("workoutForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document
            .getElementById("exerciseName")
            .value.trim();

        const sets = Number(
            document.getElementById("exerciseSets").value
        );

        const reps = document
            .getElementById("exerciseReps")
            .value.trim();

        if (
            !name ||
            !Number.isInteger(sets) ||
            sets < 1 ||
            sets > 10 ||
            !/^[a-zA-Z0-9 -]{1,20}$/.test(reps)
        ) {
            alert("Please enter valid exercise details.");
            return;
        }

        const data = getDayData(selectedDay);

        data.exercises.push({
            id: Date.now(),
            name: name,
            sets: sets,
            reps: reps,
            done: false
        });

        data.completed = false;

        saveWorkoutPlans();

        renderWorkoutPlan();

        this.reset();

        document.getElementById("exerciseSets").value = 3;

        document.getElementById("exerciseReps").value = "8-12";

    });


// MARK DAY COMPLETED

document.getElementById("completeDayBtn")
    .addEventListener("click", function() {

        const data = getDayData(selectedDay);

        if (data.exercises.length === 0) {

            alert("Add at least one exercise first.");

            return;
        }

        data.exercises.forEach(function(exercise) {
            exercise.done = true;
        });

        data.completed = true;

        saveWorkoutPlans();

        renderWorkoutPlan();

    });


// WEEKLY PROGRESS

function updateWeeklyProgress() {

    let completedDays = 0;

    plannerDays.forEach(function(day) {

        const data = getDayData(day);

        if (data.completed && data.exercises.length > 0) {
            completedDays++;
        }

    });

    const percentage = Math.round(
        (completedDays / 7) * 100
    );

    document.getElementById("weeklyCount").textContent =
        completedDays + " / 7 days";

    document.getElementById("weeklyBar").style.width =
        percentage + "%";

    document.getElementById("weeklyPercentage").textContent =
        percentage + "%";

}


// INITIALIZE PLANNER

renderWorkoutPlan();


// Accepts a plain video ID ("WDIpL0pjun0") or any YouTube link
// (watch?v=..., youtu.be/..., /shorts/..., /embed/...) and returns the ID.
function extractYouTubeId(value) {

    const text = String(value || "").trim();

    if (/^[A-Za-z0-9_-]{11}$/.test(text)) return text;

    const match = text.match(
        /(?:v=|youtu\.be\/|\/shorts\/|\/embed\/)([A-Za-z0-9_-]{11})/
    );

    return match ? match[1] : "";
}

// LOAD THE EXERCISE VIDEO
//
// YouTube only plays embedded videos when the site runs on a web server
// (Live Server, localhost or Firebase Hosting). If index.html is opened by
// double-clicking it (file://), or the video ID is wrong/removed, we show a
// friendly box and the "Search on YouTube" link instead of a broken player.

let videoRequest = 0;

function loadExerciseVideo(exercise) {

    const frame = document.getElementById("modalVideo");
    const wrapper = frame.closest(".video-wrapper");
    const fallback = document.getElementById("videoFallback");
    const searchLink = document.getElementById("videoSearchLink");

    const requestId = ++videoRequest;

    frame.src = "";
    wrapper.hidden = false;
    fallback.hidden = true;

    searchLink.href =
        "https://www.youtube.com/results?search_query=" +
        encodeURIComponent(exercise.name + " exercise proper form");

    function showFallback(message) {
        if (requestId !== videoRequest) return;
        wrapper.hidden = true;
        fallback.hidden = false;
        document.getElementById("videoFallbackText").textContent = message;
    }

    if (!exercise.video) {
        showFallback("No video added for this exercise yet. Use the link below to watch a demonstration.");
        return;
    }

    if (location.protocol === "file:") {
        showFallback(
            "Videos play when FitZone runs on a web server (VS Code Live Server or Firebase Hosting). Use the link below for now."
        );
        return;
    }

    const videoId = extractYouTubeId(exercise.video);

    if (!videoId) {
        showFallback("This video link is not valid. Use the link below to watch a demonstration.");
        return;
    }

    const embedUrl = "https://www.youtube-nocookie.com/embed/" + videoId;

    const checkUrl =
        "https://www.youtube.com/oembed?format=json&url=" +
        encodeURIComponent("https://www.youtube.com/watch?v=" + videoId);

    // Ask YouTube if the video exists and allows embedding
    fetch(checkUrl)
        .then(function (response) {
            if (requestId !== videoRequest) return;

            if (response.ok) {
                frame.src = embedUrl;
            } else {
                showFallback("This video is unavailable here. Use the link below to find a demonstration.");
            }
        })
        .catch(function () {
            // Could not check (for example no connection): try the player anyway
            if (requestId === videoRequest) frame.src = embedUrl;
        });
}


// OPEN THE EXERCISE DETAILS POPUP

function openExerciseModal(exercise) {
    document.getElementById("modalTitle").textContent = exercise.name;
    document.getElementById("modalMuscle").textContent = exercise.muscle;
    document.getElementById("modalEquipment").textContent = exercise.equipment;

    // Exercise image
    const image = document.getElementById("modalImage");
    image.hidden = false;
    image.onerror = function () { image.hidden = true; };
    image.src = exercise.image;
    image.alt = exercise.name + " demonstration";

    // Exercise video (checked first, with a YouTube search link as backup)
    loadExerciseVideo(exercise);

    // Instructions
    const instructions = document.getElementById("modalInstructions");
    instructions.replaceChildren();

    exercise.instructions.forEach(function (step) {
        const li = document.createElement("li");
        li.textContent = step;
        instructions.appendChild(li);
    });

    // Breathing
    document.getElementById("modalBreathing").textContent =
        exercise.breathing;

    // Common mistakes
    const mistakes = document.getElementById("modalMistakes");
    mistakes.replaceChildren();

    exercise.mistakes.forEach(function (mistake) {
        const li = document.createElement("li");
        li.textContent = mistake;
        mistakes.appendChild(li);
    });

    // Sets and reps
    document.getElementById("modalSets").textContent = exercise.sets;
    document.getElementById("modalReps").textContent = exercise.reps;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modal.scrollTop = 0;
}


// =====================================================
// SHARED HELPERS
// =====================================================

// Small pop-up message at the bottom-right of the screen
function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timer);

    showToast.timer = setTimeout(function () {
        toast.classList.remove("show");
    }, 2500);
}

// Used by the "Explore Workout" buttons on the dashboard.
// It jumps to the Exercise Library with the right muscle filter selected.
function showMessage(workoutName) {

    const muscleByWorkout = {
        "Chest Workout": "Chest",
        "Back Workout": "Back",
        "Leg Workout": "Legs"
    };

    const muscle = muscleByWorkout[workoutName] || "All";

    searchInput.value = "";
    equipmentFilter.value = "all";

    document
        .querySelector('.muscle-filter[data-muscle="' + muscle + '"]')
        .click();

    document.getElementById("muscles").scrollIntoView({
        behavior: "smooth"
    });

    showToast("Showing " + muscle + " exercises");
}

// Highlight the sidebar link that was clicked
document.querySelectorAll(".nav-link").forEach(function (link) {

    link.addEventListener("click", function () {

        document.querySelectorAll(".nav-link").forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});
