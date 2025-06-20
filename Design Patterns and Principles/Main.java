public class Main {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("Starting the application.");

        Logger logger2 = Logger.getInstance();
        logger2.log("Running main process.");

        System.out.println("Are both logger instances same? " + (logger1 == logger2));
    }
}
