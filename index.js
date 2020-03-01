const $table = document.createElement('Table');
let number = 0;

function getTable(){//eslint-disable-line
for (let i = 0; i < 10; i++) {//eslint-disable-line
        const $tr = document.createElement('tr');
        $table.appendChild($tr);

    for (let j = 0; j < 10; j++) {//eslint-disable-line
            const $td = document.createElement('td');
            $tr.appendChild($td);
            number++;
            $td.textContent = number;
        }
    }
    return $table.outerHTML;
}

document.body.outerHTML = getTable($table);
