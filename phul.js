let pushEX = ['Seated dumbell shoulder press', 'Dumbell incline chest press', 'Incline chest press', 'Dips', 'Cabel tricep pushdowns', 'Dumbell lateral shoulder raise', 'Military Press', 'Push-ups']
let pullEX = ['Bent over barbell row', 'Cabel pulldowns', 'Reverse grip curls', 'Pull ups', 'Dumbell Shrugs', 'Face Pulls', 'Bicep Curls', 'Hammer Curls', 'Cabel Rows', 'Deadlifts']
let legEX = ['Squats', 'Leg press', 'Leg extensions', 'Calf raises', 'Seated Calf Raises', 'Hamstring Curls', 'Romainan Deadlift', 'Lunges', 'Bulgarian Split Squat']

let list = document.getElementById('workPlan');
let amount = document.getElementById('quantity');
let push = document.getElementById('Push');
let pull = document.getElementById('Pull');
let legs = document.getElementById('Legs');

push.addEventListener('change', () => {
    if (push.checked) {
        list.append(pushEX);
    } else {
        list.remove(pushEX);
    }

})

pull.addEventListener('change', () => {
    if (pull.checked) {
        list.append(pullEX);
    } else {
        list.remove(pullEX);
    }

})

legs.addEventListener('change', () => {
    if (legs.checked) {
        list.append(legEX);
    } else {
        list.remove(legEX);
    }

})