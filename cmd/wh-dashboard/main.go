package main

import (
	"log"
	"net/http"

	"github.com/LompeBoer/wh-dashboard/web"
)

func main() {
	log.Printf("Running wh-dashboard (v%s)\n", "0.1-alpha")

	handler := web.AssetHandler("/", "build")

	http.Handle("/", handler)
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}
