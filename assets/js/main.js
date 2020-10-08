var items =[
	
	['Komitmen Sejati Seorang Muslim','Tulisan yang dibuat oleh Fathi Yakan ini mengajak kita berpikir kembali, Apa artinya saya mengaku muslim.','kom1.png','https://drive.google.com/file/d/10FetXD1eer4Haom2HkiUepZrHg8qhmPG/view?usp=sharing'],
	['Keajaiban Ikhlas','Cara meraih kesuksesan, kebaikan dan kebahagiaan hidup " Dunia Akhirat" oleh Muhammad Gatot Aryo.','screenBeni.jpg','https://drive.google.com/file/d/1-A5RbHPPNP3TYlZijxmtufPfhgST3ewf/view?usp=sharing']

]

var bookList = document.getElementById('bookList');

for (let i = 0; i < items.length; i++) {
		//<div class="lesson-icon">
		var lessonIcon = document.createElement('div')
		lessonIcon.classList.add('lesson-icon')		
		//     <img src="assets/image/sampul/kom1.png">        
		var lessonImg = document.createElement('img') 
		lessonImg.setAttribute('src','assets/image/sampul/'+items[i][2])
		lessonImg.setAttribute('alt',items[i][2])
		lessonIcon.appendChild(lessonImg)
		//   </div>

		//   <p class="text-contents">Komitmen Muslim Sejati</p>
		var textContents = document.createElement('p')
		textContents.classList.add('text-contents')
		var textContentstxt = document.createTextNode(items[i][0])
		textContents.appendChild(textContentstxt)   
        //   <p class="description">Tulisan yang dibuat oleh Syahrul Komara ini mengajak kita berpikir kembali, "Apa artinya saya mengaku muslim".</p>
        var description = document.createElement('p')
		description.classList.add('description')
		var descriptionTxt = document.createTextNode(items[i][1])
		description.appendChild(descriptionTxt)   
        //   <a href="" class="btn facebook">Baca disini</a> 
        var link = document.createElement('a')
		link.setAttribute('href',items[i][3])
		link.classList.add('btn')
		link.classList.add('facebook')
		var linkTxt = document.createTextNode('Baca disini')
		link.appendChild(linkTxt)

		// </div>
        bookList.appendChild(lessonIcon)
        bookList.appendChild(textContents)
        bookList.appendChild(description)
        bookList.appendChild(link)

}

// mencari buku

var searchList = document.getElementById('keyword')
searchList.setAttribute('onkeyup', 'searchBook()')

function searchBook() {
    var input = document.getElementById('keyword')
    var filter = input.value.toUpperCase()
    var bookList = document.getElementById('bookList')

    for (var i = 0; i < bookList.length; i++){
    	var judul=bookList[i].querySelector('p .text-contents')
    	if (bookList.innerText.toUpperCase().indexOf(filter) > -1) {
    		bookList[i].style.display = ''
    	}
    	else{
    		bookList[i].style.display = 'none'
    	}

    }
    
}          
