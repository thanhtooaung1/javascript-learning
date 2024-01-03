let day = 4;

let dayOfWeek;

switch(day) {
    case 1:
        dayOfWeek = 'Mon';
        break;
    case 2:
        dayOfWeek = 'Tue';
        break;
    case 3:
        dayOfWeek = 'Wed';
        break;
        case 4:
        dayOfWeek = 'Thu';
        break;
    case 5:
        dayOfWeek = 'Fri';
        break;
    case 6:
        dayOfWeek = 'Sat';
        break;
    case 7:
        dayOfWeek = 'Sun';
        break;
    default:
        dayOfWeek = 'Invalid';
}

console.log(dayOfWeek);