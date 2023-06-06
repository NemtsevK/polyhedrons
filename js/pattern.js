function HeaderBlock() {
    let OUTPUT = '<h1 class="header__title">Многогранники</h1>';
    $('.header').html(OUTPUT);
}

function NavigationBlock() {
    let OUTPUT = '<ul class="navigation__menu menu">';
    OUTPUT += '<li class="menu__item"><a class="menu__text" href="index.php">Главная</a></li>';
    OUTPUT += '<li class="menu__item"><a class="menu__text" href="list.php">Список</a></li>';
    OUTPUT += '<li class="menu__item"><a class="menu__text" href="table.php">Таблица</a></li>';
    OUTPUT += '<li class="menu__item"><a class="menu__text" href="types.php">Семейства</a></li>';
    OUTPUT += '<li class="menu__item"><a class="menu__text" href="dual.php">Двойственные</a></li>';
    // OUTPUT += '<a class="menu__item" href="statistics.html">Статистика</a>';
    OUTPUT += '</ul>';
    $('.navigation').html(OUTPUT);
}

function FooterBlock() {
    let OUTPUT = '<h3 class="footer__text">Блок</h3>';
    $('.footer').html(OUTPUT);
}

function PolyhedronBlock() {

    let OUTPUT = '<div class="polyhedron-block">';
    for(let i = 0; i< polyhedron_array.length; i++){
        if(polyhedron_array[i]['image'] != ''){
            let image = polyhedron_array[i]['image'];
            let text = polyhedron_array[i]['name_rus'];
            OUTPUT += '<div class="polyhedron-block__item">';
            OUTPUT += '<img class="polyhedron-block__image" src="img/polyhedrons/' + polyhedron_array[i]['image'] + '" alt="">'
            OUTPUT += '<p class="polyhedron-block__title">'+ text + '</p>';
            OUTPUT += '</div>';
        }

    }
    OUTPUT += '</div>';
    $('.main').html(OUTPUT);
}


function TableBlock() {
    let OUTPUT = '<table class="main__table">';

    OUTPUT += '<thead>';
    OUTPUT += '<tr>';
	OUTPUT += '<th class="table-header__cell"></th>';
    OUTPUT += '<th class="table-header__cell"></th>';
    OUTPUT += '<th class="table-header__cell">Название</th>';
    OUTPUT += '<th class="table-header__cell">Название</th>';
    OUTPUT += '<th class="table-header__cell">Семейство</th>';
    OUTPUT += '<th class="table-header__cell">Семейство</th>';
    OUTPUT += '<th class="table-header__cell">Грани</th>';
    OUTPUT += '<th class="table-header__cell">Рёбра</th>';
    OUTPUT += '<th class="table-header__cell">Вершины</th>';
    OUTPUT += '<th class="table-header__cell"></th>';
    OUTPUT += '</tr>';
    OUTPUT += '</thead>';

    OUTPUT += '<tbody>';

    for(let i = 0; i< polyhedron_array.length; i++){
        let sum = polyhedron_array[i]['vertices']- polyhedron_array[i]['edges'] + polyhedron_array[i]['faces'];
        OUTPUT += '<tr>';
		OUTPUT += '<td class="table-body__cell cell--center">' + i + '</td>';
        OUTPUT += '<td class="table-body__cell cell--center"><img class="table-body__image" src="img/polyhedrons/' + polyhedron_array[i]['image'] + '"></td>';
        OUTPUT += '<td class="table-body__cell">' + polyhedron_array[i]['name_rus'] + '</td>';
        OUTPUT += '<td class="table-body__cell">' + polyhedron_array[i]['name_eng'] + '</td>';
        OUTPUT += '<td class="table-body__cell">' + polyhedron_array[i]['family_rus'] + '</td>';
        OUTPUT += '<td class="table-body__cell">' + polyhedron_array[i]['family_eng'] + '</td>';
        OUTPUT += '<td class="table-body__cell">' + polyhedron_array[i]['faces'] + '</td>';
        OUTPUT += '<td class="table-body__cell">' + polyhedron_array[i]['edges'] + '</td>';
        OUTPUT += '<td class="table-body__cell">' + polyhedron_array[i]['vertices'] + '</td>';
        OUTPUT += '<td class="table-body__cell">' + sum + '</td>';
        OUTPUT += '</tr>';
        
    }

    OUTPUT += '</tbody>';

    OUTPUT += '</table>';

    $('.main').html(OUTPUT);
}

function PolyhedraOutput() {

    let OUTPUT = 'INSERT INTO Polyhedrons_list (polyhedra_id, name_rus, name_eng, type_id, faces, edges, vertices, image) VALUES ';
    

    for(let i = 0; i< polyhedron_array.length; i++){
        
        let name_rus = GetValue(polyhedron_array[i],'name_rus'),
        name_eng = GetValue(polyhedron_array[i],'name_eng'),
        type_id = GetValue(polyhedron_array[i],'family_rus'),
        faces = GetValue(polyhedron_array[i],'faces'),
        edges = GetValue(polyhedron_array[i],'edges'),
        vertices = GetValue(polyhedron_array[i],'vertices'),
        image = GetValue(polyhedron_array[i],'image');

        OUTPUT += "(" + i + ", " + name_rus + ", " + name_eng + ", " + type_id + ", " + faces + ", " + edges + ", " + vertices + ", " + image + "),\n";
    }

   

    console.log(OUTPUT);
}

function GetValue(array,field){
    let final;
    if(array[field] == undefined){
        final= "NULL";
    } else {
        final = "'" + array[field] + "'";
    }
    return final;
}