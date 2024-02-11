# onoff

## A workload to turn ON/OFF specific workloads in the same GVC

### Introduction
This workload is meant to be used in a [Control Plane](https://controlplane.com) GVC for turning on or suspending a specified list of workloads. Instances of this workload can be scheduled as Control Plane CRON tasks to turn specified workloads ON/OFF as desired. 

For example, one CRON workload turns OFF the foo & bar workloads every day at 7pm and another CRON workload turns ON the foo, bar workloads every day at 6am.

You'd run one workload as a CRON workload for every combination of workload(s) you want to turn ON or OFF.

## Steps to deploy in your GVC:
1. clone this repository
2. navigate into the <code>helm</code> folder
3. modify the <code>values.yaml</code> file and change the following values to suit your use case:

    <strong> gvc</strong> - should be the name of your GVC in which to run the onoff workload. 


    <strong>workloads</strong> - comma-separated list of workload names you are interested in turning ON/OFF.


    <strong> action </strong> - set to ON or OFF depending on whether you want to start (ON) or stop (OFF) the listed workloads.


    <strong>cron_spec</strong> - set to the cron formatted string to specify the schedule for example, every minute = * * * * * 

    <strong>name</strong> - set to a meaningful name such as onoff-on or onoff-off, depending on the function you want the workload to perform. 


4. Ensure you have <code>helm</code> installed on your machine and then execute the following command:


    <code>cpln helm install (any-name-meaningful-to-you)</code>



    To uninstall, perform the following:

    <code>cpln helm uninstall (name-you-used-above)</code>


    To list the helm processes you've installed perform:

    <code>cpln helm list</code> 