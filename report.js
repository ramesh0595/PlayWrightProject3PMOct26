const reporter=require("cucumber-html-reporter")

const options={
    theme:"bootstrap",
    jsonFile:"reports/cucumber_report.json",
    output:"reports/custom_report.html",
    reportSuiteAsScenarios:true,
    launchReport:true,
    metadata:{
        "App Version":"0.0.1",
        "Test Environment":"QA",
        "Browser":"Chrome",
        "Platform":"Windows 11",
        "Executed":"Local"
}
}

reporter.generate(options);