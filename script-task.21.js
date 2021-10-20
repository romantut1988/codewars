function grader(score) {
    switch(true){
    case  score > 1.00 : 
    return 'F';
    break;

case  score >= 0.9 : 
    return 'A';
    break;

    case  score >= 0.8 : 
    return 'B';
    break;

    case score >= 0.7 : 
    return 'C';
    break;

    case  score >= 0.6 : 
    return 'D';
    break;
    
    case  score <= 0.59 : 
    return 'F';
    break;

};
    }