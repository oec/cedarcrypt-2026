package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	dir := "."
	port := "8080"
	if len(os.Args) > 1 {
		port = os.Args[1]
	}

	server := http.NewServeMux()
	server.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		log.Printf("%s %s", r.Method, r.RequestURI)
		http.FileServer(http.Dir(dir)).ServeHTTP(w, r)
	})

	log.Printf("Serving %s on :%s", dir, port)
	log.Fatal(http.ListenAndServe(":"+port, server))
}
