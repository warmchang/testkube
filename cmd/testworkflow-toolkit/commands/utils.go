package commands

import (
	"os"
	"os/exec"
	"strconv"
)

func concat(args ...interface{}) []string {
	result := make([]string, 0)
	for _, a := range args {
		switch a.(type) {
		case string:
			result = append(result, a.(string))
		case int:
			result = append(result, strconv.Itoa(a.(int)))
		case []string:
			result = append(result, a.([]string)...)
		case []interface{}:
			result = append(result, concat(a.([]interface{})...)...)
		}
	}
	return result
}

func Comm(cmd string, args ...interface{}) *exec.Cmd {
	return exec.Command(cmd, concat(args...)...)
}

func Run(c string, args ...interface{}) error {
	sub := Comm(c, args...)
	sub.Stdout = os.Stdout
	sub.Stderr = os.Stderr
	return sub.Run()
}
