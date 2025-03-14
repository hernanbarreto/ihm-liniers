import subprocess
import time
import os
import psutil
from selenium import webdriver
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.firefox.options import Options

def check_and_kill_process_on_port(ports):
    for port in ports:
        for proc in psutil.process_iter(attrs=['pid', 'name']):
            try:
                for conn in proc.net_connections(kind='inet'):
                    if conn.laddr.port == port:
                        print(f"Matando proceso en el puerto {port} (PID: {proc.info['pid']})")
                        proc.kill()
            except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
                pass

def start_mysql():
    mysql_command = r"C:\Users\hernan.barreto\Documents\MySQL\bin\mysqld.exe"
    return subprocess.Popen(mysql_command)

def start_nextjs():
    nextjs_path = r"C:\Users\hernan.barreto\OneDrive - INGEROP\CBTC COMS\99 Misc\DATOS TRENES\ATS\ats-liniers"
    os.chdir(nextjs_path)
    return subprocess.Popen([r"C:\Users\hernan.barreto\Documents\node\npm.cmd", "start"])

def start_node():
    node_path = r"C:\Users\hernan.barreto\OneDrive - INGEROP\CBTC COMS\99 Misc\DATOS TRENES\ATS\ats-liniers\binlog-listener"
    script_path = os.path.join(node_path, "binlog-listener.js")
    return subprocess.Popen([r"C:\Users\hernan.barreto\Documents\node\node", script_path],cwd=node_path)

def open_browser():    
    options = Options()

    firefox_path = r"C:\Users\hernan.barreto\AppData\Local\Mozilla Firefox\firefox.exe"
    options.binary_location = firefox_path
    
    options.add_argument("--start-fullscreen")
    options.add_argument("--kiosk")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-infobars")
    options.set_preference("intl.accept_languages", "es,es-ES")
    
    service = Service(executable_path=r"C:\Users\hernan.barreto\Documents\Geckodriver\geckodriver.exe")
    driver = webdriver.Firefox(service=service, options=options)
    
    driver.get("http://localhost:3000")
    return driver

if __name__ == "__main__":
    check_and_kill_process_on_port([3000, 8080])
    
    mysql_process = start_mysql()
    time.sleep(10)
    node_process = start_node()
    time.sleep(10)
    nextjs_process = start_nextjs()
    time.sleep(10)
    driver = open_browser()
    
    input("Presiona Enter para salir...")
    mysql_process.terminate()
    nextjs_process.kill()
    node_process.kill()
    driver.quit()
    print("Procesos MySQL, Next.js, Node y Firefox cerrados.")
