// Define the make_album function
function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,  
        title: album_title,
    };
    
    if (tracks !== undefined) {
        album.tracks = tracks;  // add the 'tracks' property to the object with its value
    }

    return album;               // return the completed object

}

// Calling three function and creating 3 variables wiht different values

let album1 = make_album("Hamza", "Album title 1");

let album2 =  make_album("Abdullah", "Album title 2");

// Calling a make_album function with third parameter

let album3 =  make_album("Muhammad", "Album title 3", 10);

// Printing values of our object created my fuction

console.log(album1);
console.log(album2);
console.log(album3);
