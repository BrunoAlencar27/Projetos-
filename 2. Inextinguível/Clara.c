#include <stdio.h>
#include <ctype.h>

void contarHistoria() {
    printf("\n\"Inextinguível\"\n\n");
    printf("Tinha medo do fim, medo do corte,\n");
    printf("Do risco fatal entre nós dois traçado.\n");
    printf("Temia o silêncio, temia a sorte,\n");
    printf("Temia te ver apenas no passado.\n\n");
    
    printf("Mas terminei. E a dor veio densa,\n");
    printf("Como um luto sem corpo, sem chão.\n");
    printf("Me debati na ausência imensa,\n");
    printf("Temendo apagar tua imensidão.\n\n");
    
    printf("Erro meu! Pois não se apaga o que arde,\n");
    printf("Nem se mata o que um dia foi vida.\n");
    printf("Dois meses, e és ainda alarde,\n");
    printf("Presença que nunca foi dissolvida.\n\n");
    
    printf("Agora és sombra, és brisa tardia,\n");
    printf("Eco nas noites que não querem fim.\n");
    printf("Não morreste, apenas viveste\n");
    printf("Noutra forma dentro de mim.\n\n");
}

int main() {
    char resposta;
    
    printf("Quer ouvir uma triste história? [S/N] ");
    scanf(" %c", &resposta);
    
    if (toupper(resposta) == 'S') {
        contarHistoria();
    } else {
        printf("Talvez em outro dia...\n");
    }
    
    return 0;
}
