/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it255.dz03;

import com.google.gson.Gson;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

/**
 *
 * @author marijana
 */
public class Main {
    public static void main(String[] args) {
        new Main();
    }
    
    public Main(){
        Data d = new Data();
        
        d.setBody("Body");
        d.setId("01");
        d.setTitle("Treci domaci");
        d.setUserId("2718");
        
       
        
        post(d);
      // get();
    }
    
    public void post(Data korisnik){
        try{
            URL link = new URL("http://jsonplaceholder.typicode.com/posts");
            HttpURLConnection konekcija = (HttpURLConnection) link.openConnection();
            konekcija.setRequestMethod("POST");
            konekcija.setRequestProperty("Content-Type", "application/json");
            konekcija.setRequestProperty("Accept", "application/json");
            konekcija.setDoOutput(true);
            PrintWriter pw = new PrintWriter(konekcija.getOutputStream());
            pw.print(new Gson().toJson(korisnik));
            pw.close();
            pw.flush();
            BufferedReader br = new BufferedReader(new InputStreamReader((konekcija.getInputStream())));
            String output;
            while((output = br.readLine()) != null){
                System.out.println(output);
            }
            konekcija.disconnect();

        }
        catch(MalformedURLException e){
            e.printStackTrace();
        }
        catch(IOException e){
            e.printStackTrace();
        }
    }
    public void get() {
        try {
            URL url = new URL("https://newton.now.sh/integrate/x^2+2x");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setRequestProperty("Accept", "application/json");
            if (conn.getResponseCode() != 200){
                throw new RuntimeException(
                "HTTP error code : " + conn.getResponseCode());
            }
            BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));
            String output;
            while ((output = br.readLine()) != null){
                System.out.println(output);
            }
            conn.disconnect();
            }catch (MalformedURLException e) {
            e.printStackTrace();
            }catch (IOException e) {
            e.printStackTrace();
            }
    }

}
