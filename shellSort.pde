int [] valores;

int salto, i, j, k, aux;


void setup(){
  size(1200, 900);
  valores = new int[width/5];
  println("VALORES NO ORDENADOS");
  for (int i = 0; i < valores.length; i++) {
    valores[i] = (int) random(height);
    print(valores[i] + " ");
  }
  salto = valores.length / 2;
  frameRate(1);
}

void draw(){
  
  background(0);

    if (salto > 0) {
      for (i = salto;i < valores.length; i++) {
          j = i-salto;
          while (j>=0){
            k = j + salto;
            if (valores[j]<=valores[k]) {
                j = -1;
            } else {
                aux = (int) valores[j];
                valores[j] = valores[k];
                valores[k] = aux;
                j = j - salto;
            }
          }
      }
        salto = salto / 2;
        dibujarLineas();
    }else{
      dibujarLineas();
      noLoop();
      println(" ");
      println("VALORES ORDENADOS");
      for(int i = 0; i < valores.length; i++){
        print(valores[i] + " ");
      }
    }
    
    
}

void dibujarLineas(){
  for (int i = 0; i < valores.length; i++) {
    stroke(25, 125, 120);
    line(i*5, height, i*5, height - valores[i]);
  }
}
