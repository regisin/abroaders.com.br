<script>
    let columns = ["Matéria (opcional)", "Nota (0-10)", "Créditos (horas)"]
	let data = []
	let newRow = {
            nome:'',
            nota:'',
            ch:''
        };
	
	function addRow() {
		data = [...data, {...newRow}];
		newRow = {
            nome:'',
            nota:'',
            ch:''
        };
	}
	
	function deleteRow(rowToBeDeleted) {
		data = data.filter(row => row != rowToBeDeleted);
	}
    
    function convert(grade) {
        var usGrade = 0;
        if (grade <= 10 && grade >= 9) {
            usGrade = 4;
        } else if (grade < 9 && grade >= 7) {
            usGrade = 3;
        } else if (grade < 7 && grade >= 5) {
            usGrade = 2;
        } else if (grade < 5 && grade >= 3) {
            usGrade = 1;
        } else if (grade < 3 && grade >= 0) {
            usGrade = 0;
        }
        return usGrade;
    }

    $: detalhe = data.map(
        materia => ({'convertido': convert(materia.nota),
         'peso': convert(materia.nota)*materia.ch,
         ...materia})
    );
    $: sumM = detalhe.reduce( (prev, curr) => prev+curr.peso, 0);
    $: sumCh = detalhe.reduce( (prev, curr) => prev+curr.ch, 0);
    $: gpa = sumM / sumCh;
</script>

# Calculadora de GPA

Para calcular automaticamente o Grade Point Average (GPA), adicione as materias na tabela abaixo. A conversao acontecera automaticamente.

## Historico de notas

Insira as notas das materias e os creditos/horas.

<table>
	<tr class="header">
		{#each columns as column}
		<th>{column}</th>
		{/each}
	</tr>
	
	{#each data as row}
    <tr>
        <td><input type="text" bind:value={row.nome}/></td>
        <td><input type="number" step="0.01" min="0.00" max="10.00" bind:value={row.nota}/></td>
        <td><input type="number" step="1" min="1" max="6" bind:value={row.ch}/></td>

        <button on:click={() => deleteRow(row)}>
            <svg class="svg-inline--fa fa-minus fa-w-14 fa-2x"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path
                    fill="currentColor"
                    d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" class=""/>
            </svg>
        </button>
    </tr>
	{/each}
	
	<tr class="new">
        <td><input type="text" bind:value={newRow.nome} placeholder={columns[0]}/></td>
        <td><input type="number" step="0.01" min="0.00" max="10.00" bind:value={newRow.nota} placeholder={columns[1]}/></td>
        <td><input type="number" step="1" min="1" max="6" bind:value={newRow.ch} placeholder={columns[2]}/></td>

		<button on:click={addRow}>
            <svg class="svg-inline--fa fa-plus fa-w-14 fa-2x"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path
                    fill="currentColor"
                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
        </button>
	</tr>
</table>

## Resumo - todas as matérias combinadas
Insira os dados na tabela acima e os resultados aparecerao aqui.

GPA: {gpa}
Total de créditos: {sumCh}


## Detalhamento por Matéria

<table>
	<tr class="header">
		<th>Matéria</th>
        <th>GPA</th>
        <th>GPA x Créditos</th>
	</tr>

    {#each detalhe as materia}
    <tr>
        <td>{materia.nome}</td>
        <td>{materia.convertido}</td>
        <td>{materia.peso}</td>
    </tr>
    {/each}
</table>

<style lang="postcss" global>
    :local(.fa-minus) {
        @apply w-4 text-red-500;
    }
    :local(.fa-plus) {
        @apply w-4 text-green-500;
    }
    :local(.header) :local(th) {
        @apply text-center;
    }
    :local(td) {
        @apply border-2
    }

</style>