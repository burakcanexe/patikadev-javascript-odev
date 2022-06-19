const input = document.getElementById('task')
const list = document.getElementById('list')

function newElement() {
    if (input.value.length>0) {
        const tasks = getTasks()
        tasks.push(input.value)
        localStorage.setItem('tasks', JSON.stringify(tasks))

        const tasksDom = `
            <li>${input.value}</li>
        `
        list.innerHTML += tasksDom
        alert('Başarıyla eklendi')
    }else{
        alert('Boş alan bırakmayınız')
    }
}

function getTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    if (!tasks) {
        tasks = ['3 Litre Su İç', 'Ödevleri Yap', 'En Az 3 Saat Kodlama Yap', 'Yemek Yap', '50 Sayfa Kitap Oku']
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    return tasks
}

function listTasks() {
    const tasks = getTasks()
    tasks.forEach(task => {
        const tasksDom = `
            <li>${task}</li>
        `
        list.innerHTML += tasksDom
    });

}

listTasks()