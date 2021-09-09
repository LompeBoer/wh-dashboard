package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"

	"github.com/LompeBoer/wh-dashboard/web"
)

const VersionNumber = "0.1-alpha"

func main() {
	versionFlag := flag.Bool("version", false, "Print the current version and exit")
	flag.Parse()

	switch {
	case *versionFlag:
		printVersion()
		return
	}

	log.Printf("Running wh-dashboard (v%s)\n", VersionNumber)

	handler := web.AssetHandler("/", "build")

	http.Handle("/", handler)
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}

func printVersion() {
	fmt.Println(VersionNumber)
}
