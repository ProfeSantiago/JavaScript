#include <cstdlib>
#include <iostream>

using namespace std;

int main(int argc, char *argv[])
{
       	printf("Content-Type: text/html\r\n\r\n"); 
    	printf("<html>");
    	printf("<Head> <Title> 1º Ejemplo CGI´s </Title> <Head>");
    	printf("<Body>");
    	printf("<H2>Primer CGI<H2>");
 		printf("Hola Mundo");
    	printf("</body></html>");
}
