import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        File folder = new File("./imgs"); // Шлях до директорії з файлами

        File[] files = folder.listFiles(); // Отримуємо список файлів
        List<String> jpgs = new ArrayList<>(); // Створюємо список для файлів з розширенням .jpg

        if (files != null) {
            for (File file : files) {
                if (file.isFile() && file.getName().endsWith(".jpg")) {
                    jpgs.add(file.getName());
                }
            }
        }

        System.out.println(jpgs.size());
    }
}
